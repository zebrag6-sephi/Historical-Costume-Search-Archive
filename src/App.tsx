/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HomeScreen } from './components/HomeScreen';
import { ExploreScreen } from './components/ExploreScreen';
import { CompareScreen } from './components/CompareScreen';
import { RecordDetailScreen } from './components/RecordDetailScreen';
import { LibraryScreen } from './components/LibraryScreen';
import { MyScreen } from './components/MyScreen';
import {
  HISTORICAL_RECORDS,
  COMPARISON_REPORT_DATA,
  INITIAL_PROJECT_BOARDS,
  LEXICON_KEYWORDS
} from './data/mockData';
import { HistoricalRecord, ProjectBoard } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [previousTab, setPreviousTab] = useState<string>('home');
  const [records] = useState<HistoricalRecord[]>(HISTORICAL_RECORDS);
  const [selectedRecord, setSelectedRecord] = useState<HistoricalRecord>(HISTORICAL_RECORDS[0]);
  const [compareList, setCompareList] = useState<string[]>(['wolf-hall', 'other-boleyn-girl']);
  const [bookmarks, setBookmarks] = useState<string[]>([
    'wolf-hall',
    'name-of-the-rose',
    'the-king-henry-v',
    'gladiator'
  ]);
  const [projects, setProjects] = useState<ProjectBoard[]>(INITIAL_PROJECT_BOARDS);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleNavigate = (tab: string) => {
    setPreviousTab(currentTab);
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectRecord = (record: HistoricalRecord) => {
    setSelectedRecord(record);
    setPreviousTab(currentTab);
    setCurrentTab('record-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleCompare = (id: string) => {
    setCompareList(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }
      if (prev.length >= 3) {
        alert('비교함은 최대 3편까지 추가할 수 있습니다.');
        return prev;
      }
      return [...prev, id];
    });
  };

  const handleToggleBookmark = (id: string) => {
    setBookmarks(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }
      return [...prev, id];
    });
  };

  const handleAddProject = (newProj: Partial<ProjectBoard>) => {
    const created: ProjectBoard = {
      id: `proj-${Date.now()}`,
      title: newProj.title || '새 창작 연구 프로젝트',
      subtitle: newProj.subtitle || '복식 고증 레퍼런스 수집 중',
      status: 'writing',
      statusLabel: '활성 집필 중',
      updatedAt: '방금 전 생성',
      specimenCode: newProj.specimenCode || 'FOLIO SPECIMEN #30',
      specimenTitle: newProj.specimenTitle || '신규 수집 사료군',
      deviation: newProj.deviation || '사료 비교 편차 안정권 (±3.0%)',
      curatorMemo: newProj.curatorMemo || '“캐릭터 의상 콘셉트 원화 제작용 사료 핀셋 분석”',
      tags: newProj.tags || ['#고증연구', '#창작보드'],
      images: newProj.images || [HISTORICAL_RECORDS[0].coverImage]
    };
    setProjects(prev => [created, ...prev]);
  };

  const handleExploreWithTag = (tag: string) => {
    setSearchQuery(tag);
    handleNavigate('explore');
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#1C1917] flex flex-col font-body">
      {/* Top Fixed Header (hidden in Record Detail if desired, or kept as archival header) */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        unreadCount={1}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-16">
        {currentTab === 'home' && (
          <HomeScreen
            records={records}
            onSelectRecord={handleSelectRecord}
            onNavigate={handleNavigate}
            onSearchQuery={(q) => setSearchQuery(q)}
            compareList={compareList}
            onToggleCompare={handleToggleCompare}
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {currentTab === 'explore' && (
          <ExploreScreen
            records={records}
            onSelectRecord={handleSelectRecord}
            compareList={compareList}
            onToggleCompare={handleToggleCompare}
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
            onNavigateToCompare={() => handleNavigate('compare')}
            initialQuery={searchQuery}
          />
        )}

        {currentTab === 'compare' && (
          <CompareScreen
            records={records}
            report={COMPARISON_REPORT_DATA}
            compareList={compareList}
            onSelectRecord={handleSelectRecord}
            onSaveToLibrary={() => handleToggleBookmark(compareList[0] || 'wolf-hall')}
          />
        )}

        {currentTab === 'library' && (
          <LibraryScreen
            projects={projects}
            onAddProject={handleAddProject}
            bookmarks={bookmarks}
            records={records}
            report={COMPARISON_REPORT_DATA}
            lexiconKeywords={LEXICON_KEYWORDS}
            onSelectRecord={handleSelectRecord}
            onNavigateToCompare={() => handleNavigate('compare')}
            onNavigateToExploreWithTag={handleExploreWithTag}
          />
        )}

        {currentTab === 'record-detail' && (
          <RecordDetailScreen
            record={selectedRecord}
            onBack={() => handleNavigate(previousTab === 'record-detail' ? 'home' : previousTab)}
            compareList={compareList}
            onToggleCompare={handleToggleCompare}
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {currentTab === 'my' && (
          <MyScreen
            records={records}
            projects={projects}
            bookmarks={bookmarks}
            compareList={compareList}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Persistent Bottom Navigation (available on primary screens) */}
      {currentTab !== 'record-detail' && (
        <BottomNav
          activeTab={currentTab}
          onTabChange={handleNavigate}
          compareCount={compareList.length}
        />
      )}
    </div>
  );
}

'use client';

import dynamic from 'next/dynamic';

// 动态导入PDF查看器（关闭SSR）
const PDFViewer = dynamic(
  () => import('@/components/PDFViewer'),
  { 
    ssr: false,
    loading: () => (
      <div className="flex justify-center py-12">
        <p>Loading resume viewer...</p>
      </div>
    )
  }
);

const handleDownload = () => {
    // 创建隐藏的下载链接
    const link = document.createElement('a');
    link.href = '/resumes/Joey_Zhu_Resume_Bilingual.pdf';
    // link.download = 'Joey_Zhu_Resume_Bilingual.pdf'; // 设置下载文件名
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto py-24">
      <h1 className="text-3xl font-bold mb-8">My Resume</h1>
      <button 
          onClick={handleDownload}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Download Resume
      </button>
      <PDFViewer file="/resumes/Joey_Zhu_Resume_Bilingual.pdf" />
    </div>
  );
}
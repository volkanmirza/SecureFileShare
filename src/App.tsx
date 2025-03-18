import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileUpload } from './components/FileUpload';
import { UploadProgress } from './components/UploadProgress';
import { TokenDisplay } from './components/TokenDisplay';
import { FileDownload } from './components/FileDownload';
import { LanguageSwitch } from './components/LanguageSwitch';
import { Share, Shield, Key, ArrowRight } from 'lucide-react';

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <LanguageSwitch />
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Share className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">{t('title')}</h1>
          </div>
          <p className="text-gray-600">{t('subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold mb-4">{t('upload.title')}</h2>
              <FileUpload />
              <UploadProgress />
              <TokenDisplay />
            </div>
          </div>

          <div>
            <FileDownload />
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6 text-center">{t('howItWorks.title')}</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <Shield className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('howItWorks.step1.title')}</h3>
              <p className="text-gray-600">{t('howItWorks.step1.description')}</p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <Key className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('howItWorks.step2.title')}</h3>
              <p className="text-gray-600">{t('howItWorks.step2.description')}</p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <ArrowRight className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('howItWorks.step3.title')}</h3>
              <p className="text-gray-600">{t('howItWorks.step3.description')}</p>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold mb-2">{t('howItWorks.security.title')}</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {t('howItWorks.security.features', { returnObjects: true }).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold mb-2">{t('howItWorks.technical.title')}</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {t('howItWorks.technical.specs', { returnObjects: true }).map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-100 rounded-lg text-sm text-gray-600">
            <p className="font-medium mb-2">{t('howItWorks.securityNote.title')}</p>
            <p>{t('howItWorks.securityNote.description')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
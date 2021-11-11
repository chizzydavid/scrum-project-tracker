import React, { useState } from 'react';
import { exportData, importData } from '../utils/storage';
import { Button } from './Button';

export type DataUtilsProps = { className?: string };
export function DataUtils({ className = '' }: DataUtilsProps) {
  const [value, setValue] = useState<string>('');
  return (
    <div className={` ${className}`}>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={5}
        className="px-1 rounded-md border-px w-full"
      />

      <div className="flex gap-5 justify-end items-center mt-4">
        <Button
          onClick={async () => {
            const dataStr = exportData();
            if (!dataStr) {
              alert(`Nothing to export`);
              return;
            }

            setValue(dataStr);

            await navigator.clipboard.writeText(dataStr);
            alert(`Copied to clipboard!`);
          }}
        >
          Export
        </Button>
        <Button
          onClick={() => {
            if (!value) {
              alert(`Nothing to import`);
              return;
            }
            importData(value);
            window.location.reload();
          }}
        >
          Import
        </Button>
      </div>
    </div>
  );
}

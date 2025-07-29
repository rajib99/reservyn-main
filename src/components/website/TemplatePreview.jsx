import React from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

export default function TemplatePreview({ template, onClose }) {
  if (!template) return null;

  return (
    <Dialog open={!!template} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-full h-[90vh] p-0">
        <div className="relative w-full h-full">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <iframe
            src={`https://example.com/template-preview/${template.id}`}
            title={`${template.name} Preview`}
            className="w-full h-full rounded-lg"
            frameBorder="0"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
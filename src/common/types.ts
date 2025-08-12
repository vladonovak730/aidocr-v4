import type {
  ClipboardEventHandler,
  CSSProperties,
  DragEventHandler,
} from 'react';

export interface InputInterface {
  name: string;
  register?: any;
  className?: string;
  style?: CSSProperties;
  placeholderColor?: string;
  placeholder?: string;
  error?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
}

export interface InputExternalHandlers {
  onCopy?: ClipboardEventHandler | undefined;
  onCut?: ClipboardEventHandler | undefined;
  onPaste?: ClipboardEventHandler | undefined;
  onDragStart?: DragEventHandler | undefined;
  onDrop?: DragEventHandler | undefined;
}

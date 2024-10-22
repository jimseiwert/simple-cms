export interface UseDraggableArguments {
    id: string | number;
    attributes?: {
      type: string;
    },
    data?: Record<string, any>;
    disabled?: boolean;
  }

  export interface UseDroppableArguments {
    id: string | number;
    disabled?: boolean;
    data?: Record<string, any>;
  }
declare global {
  interface IProduct {
    name: string;
    price: number;
    count: number;
  }

  interface IButton {
    title: string;
    onClick: () => void;
  }
}

export {};

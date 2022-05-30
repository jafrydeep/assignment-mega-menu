export interface Todo {
  id: string;
  desc: string;
  isComplete: boolean;
}

export interface JsonTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export interface submenu {
  id: number;
  name: string;
}
export interface subCat {
  id: number;
  name: string;
  products: ArrayArray<{
    id: number;
    name: string;
  }>;
}
export interface dropdownTypes {
  subCategory: ArrayArray<{
    id: number;
    name: string;
    products: ArrayArray<{
      id: number;
      name: string;
    }>;
  }>;
  id: number;
  name: string;
  isActive: boolean;
}

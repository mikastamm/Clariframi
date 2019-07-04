import { ToolbarItem } from '../items/toolbar-item';

export interface ToolbarCategory {
    items: ToolbarItem[];
    name: string;
    faIconClass: string;
}

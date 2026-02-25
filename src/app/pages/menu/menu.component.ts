import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

interface MenuItem {
  name: string;
  value: number;
  checked: boolean;
}

interface MenuType {
  type: string;
  items: MenuItem[];
}

@Component({
  selector: "app-menu",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./menu.component.html",
})
export class MenuComponent {
  menuData: MenuType[] = [
    {
      type: "Тип 1",
      items: [
        { name: "Item 1", value: 20, checked: false },
        { name: "Item 2", value: 30, checked: false },
        { name: "Item 3", value: 40, checked: true },
        { name: "Item 4", value: 50, checked: false },
      ],
    },
    {
      type: "Тип 2",
      items: [
        { name: "Item A", value: 10, checked: false },
        { name: "Item B", value: 25, checked: false },
        { name: "Item C", value: 35, checked: false },
      ],
    },
  ];

  selectedType: MenuType = this.menuData[0];

  selectType(type: MenuType): void {
    this.selectedType = type;
  }

  toggleItem(item: MenuItem): void {
    item.checked = !item.checked;
  }

  getSelectedCount(): number {
    return this.selectedType.items.filter((item) => item.checked).length;
  }

  getSelectedTotal(): number {
    return this.selectedType.items
      .filter((item) => item.checked)
      .reduce((sum, item) => sum + item.value, 0);
  }
}

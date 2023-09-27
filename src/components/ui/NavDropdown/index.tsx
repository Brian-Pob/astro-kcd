import { DropdownMenu, Link } from '@kobalte/core';
import { For, children, createSignal } from 'solid-js';
import s from './style.module.scss';

// TODO: Add proper types
function NavDropdown(props: any) {
  const links = props.links;

  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger class={s['dropdown-menu__trigger']}>
          <DropdownMenu.Icon class={s['dropdown-menu__trigger-icon']}>
            <i class='ph ph-caret-down'></i>
          </DropdownMenu.Icon>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content class={s['dropdown-menu__content']}>
            {links.map((link: any) => (
              <DropdownMenu.Item
                class={s['dropdown-menu__item']}
                closeOnSelect={false}
              >
                <Link.Root href={link.href}>{link.text}</Link.Root>
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  );
}

export default NavDropdown;

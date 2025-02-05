import {
    IconAdjustments,
    IconArrowBack,
    IconEye,
    IconHttpDelete,
    IconUpload,
} from '@tabler/icons-react';

import NavItemAdmin from './NavItem';

export default function NavAdmin(){
    
    return (
        <aside className="w-80 bg-gradient-to-r from-[#A96BE6] to-[#C7A2EC] p-6">
            <nav className="flex flex-col gap-2 text-black">
                <NavItemAdmin text="Visualizar" href="/admin" icon={IconEye} />
                <NavItemAdmin text="Adicionar" href="/create" icon={IconUpload} />
                <NavItemAdmin text="Atualizar" href="/update" icon={IconAdjustments} />
                <NavItemAdmin text="Deletar" href="/delete" icon={IconHttpDelete} />
                <NavItemAdmin
                    text="Sair"
                    href="/"
                    icon={IconArrowBack}
                />
            </nav>
        </aside>
    )
}
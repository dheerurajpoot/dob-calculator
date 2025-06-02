"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	const navigation = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{ name: "Contact", href: "/contact" },
	];

	const isActive = (path: string) => {
		return pathname === path;
	};

	return (
		<header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container mx-auto flex h-16 items-center justify-between'>
				<div className='flex items-center gap-2'>
					<Link href='/' className='flex items-center space-x-2'>
						<span className='text-2xl font-bold text-primary'>
							DateCalc
						</span>
					</Link>
				</div>

				{/* Desktop navigation */}
				<nav className='hidden md:flex items-center gap-6'>
					{navigation.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className={`text-sm font-medium transition-colors hover:text-primary ${
								isActive(item.href)
									? "text-primary"
									: "text-muted-foreground"
							}`}>
							{item.name}
						</Link>
					))}
					<ModeToggle />
				</nav>

				{/* Mobile menu button */}
				<div className='flex md:hidden'>
					<ModeToggle />
					<Button
						variant='ghost'
						className='ml-2 h-10 w-10 px-0'
						onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<span className='sr-only'>Toggle menu</span>
						{isMenuOpen ? (
							<X className='h-6 w-6' />
						) : (
							<Menu className='h-6 w-6' />
						)}
					</Button>
				</div>
			</div>

			{/* Mobile navigation */}
			{isMenuOpen && (
				<div className='md:hidden'>
					<div className='container mx-auto py-4 grid gap-4'>
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className={`text-sm font-medium transition-colors hover:text-primary ${
									isActive(item.href)
										? "text-primary"
										: "text-muted-foreground"
								}`}
								onClick={() => setIsMenuOpen(false)}>
								{item.name}
							</Link>
						))}
					</div>
				</div>
			)}
		</header>
	);
}

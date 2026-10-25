"use client";
import Link from "next/link";
import { Leaf, Search, ShoppingBasket, UserRound, Menu } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useState } from "react";

export default function Header({ onSearch }: { onSearch: (value: string) => void }) {
  const count = useSelector((state: RootState) => state.cart.items.reduce((sum, item) => sum + item.qty, 0));
  const [query, setQuery] = useState("");
  return <header className="sticky top-0 z-40 border-b border-green-100 bg-white/95 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 lg:px-8">
      <Link href="/" className="flex shrink-0 items-center gap-2 text-xl font-black tracking-tight text-leaf-700"><span className="rounded-xl bg-leaf-100 p-2"><Leaf size={22}/></span><span>green<span className="text-slate-800">basket</span></span></Link>
      <div className="hidden flex-1 md:block">
        <form onSubmit={e => { e.preventDefault(); onSearch(query); }} className="mx-auto flex max-w-xl items-center rounded-xl border border-slate-200 bg-slate-50 px-3 focus-within:border-leaf-500">
          <Search size={18} className="text-slate-400"/>
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search organic products..." className="w-full bg-transparent px-3 py-2.5 text-sm outline-none"/>
          <button className="rounded-lg bg-leaf-600 px-4 py-2 text-sm font-semibold text-white">Search</button>
        </form>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <Link href="/login" className="hidden items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-leaf-50 sm:flex"><UserRound size={18}/> Admin</Link>
        <Link href="/order" className="relative flex items-center gap-2 rounded-xl bg-leaf-50 px-3 py-2.5 text-sm font-bold text-leaf-700"><ShoppingBasket size={19}/><span className="hidden sm:inline">Basket</span><span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-leaf-600 px-1 text-xs text-white">{count}</span></Link>
      </div>
    </div>
    <div className="border-t border-slate-100 px-4 py-2 md:hidden">
      <form onSubmit={e => { e.preventDefault(); onSearch(query); }} className="flex items-center gap-2 rounded-xl border bg-slate-50 px-3"><Search size={16}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products..." className="w-full bg-transparent py-2 text-sm outline-none"/><button className="text-sm font-bold text-leaf-700">Go</button></form>
    </div>
  </header>;
}

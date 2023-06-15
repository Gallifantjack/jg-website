import { CodeWindow } from '@/components/CodeWindow'
import { HtmlZenGarden } from '@/components/HtmlZenGarden'
import { Tabs } from '@/components/Tabs'
import {
  BigText,
  Caption,
  IconContainer,
  Link,
  Paragraph,
  Widont,
  themeTabs,
} from '@/components/home/common'
import { useEffect, useRef, useState } from 'react'
import { GridLockup } from '../GridLockup'

const code = {
  Simple: `<div class="flex font-sans">
  <div class="flex-none w-48 relative">
    <img src="/classic-utility-jacket.jpg" alt="" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
  </div>
  <form class="flex-auto p-6">
    <div class="flex flex-wrap">
      <h1 class="flex-auto text-lg font-semibold text-slate-900">Classic Utility Jacket</h1>
      <div class="text-lg font-semibold text-slate-500">$110.00</div>
      <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">In stock</div>
    </div>
    <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
      <div class="space-x-2 flex text-sm">
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xs" checked />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">XS</div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="s" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">S</div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="m" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">M</div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="l" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">L</div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xl" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">XL</div>
        </label>
      </div>
    </div>
    <div class="flex space-x-4 mb-6 text-sm font-medium">
      <div class="flex-auto flex space-x-4">
        <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">Buy now</button>
        <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">Add to bag</button>
      </div>
      <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
    <p class="text-sm text-slate-700">Free shipping on all continental US orders.</p>
  </form>
</div>`,
}

function extractClasses(code) {
  return code.match(/class="[^"]+"/g).map((attr) => attr.substring(7, attr.length - 1))
}

const classes = {
  Simple: extractClasses(code.Simple),
}

const content = {
  Simple: ['/classic-utility-jacket.jpg', 'Classic Utility Jacket', '$110.00'],
}

export function BuildAnything() {
  const [theme, setTheme] = useState('Simple')
  const [themeContent, setThemeContent] = useState('') // New state variable for theme content

  let classIndex = 0
  let contentIndex = 0

  const initial = useRef(true)

  useEffect(() => {
    initial.current = false
  }, [])

  // New useEffect hook for fetching the theme.txt file
  useEffect(() => {
    // Ensure theme value is capitalized for fetch path
    const themeCapitalized = theme.charAt(0).toUpperCase() + theme.slice(1);
    
    fetch(`/themes/${themeCapitalized}.txt`) 
      .then((response) => response.text())
      .then((data) => {
        setThemeContent(data);
      });
  }, [theme]);  // <- Dependency array. Fetch will run every time `theme` changes.
  

  return (
    <section id="build-anything">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <IconContainer
          className="dark:bg-pink-500 dark:highlight-white/30"
          light={require('@/img/icons/home/build-anything.png').default.src}
          dark={require('@/img/icons/home/dark/build-anything.png').default.src}
        />
        <Caption className="text-pink-500 dark:text-pink-400">Foundations</Caption>
        <BigText>
          <Widont>Essential knowledge built from the ground up.</Widont>
        </BigText>
        <Paragraph>
          We condense and clarify foundational topics starting from first principles. Compiling the
          lessons from the greatest books, giving you guides to navigating complex topics.
        </Paragraph>
        <Link href="/docs/installation" color="pink" darkColor="gray">
          Get started<span className="sr-only">, installation</span>
        </Link>
        <div className="mt-10">
          <Tabs
            className="text-pink-500 dark:text-pink-400"
            iconClassName="text-pink-500 dark:text-pink-400"
            tabs={themeTabs}
            selected={theme}
            onChange={setTheme}
          />
        </div>
      </div>
      <GridLockup
        className="mt-10 xl:mt-2"
        beams={1}
        left={<HtmlZenGarden theme={theme} />}
        right={
          <CodeWindow>
            <CodeWindow.Code2>
              {themeContent} {/* Display the content of theme.txt */}
            </CodeWindow.Code2>
          </CodeWindow>
        }
      />
    </section>
  )
}
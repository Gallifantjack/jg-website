import { usePrevious } from '@/hooks/usePrevious'
import { fit } from '@/utils/fit'
import clsx from 'clsx'
import debounce from 'debounce'
import dlv from 'dlv'
import { AnimateSharedLayout, motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import colors from 'tailwindcss/colors'

const themes = {
  Simple: {
    wrapper: { borderRadius: 12 },
    container: '',
    image: {
      width({ containerWidth, col }, css = false) {
        if (!containerWidth) return 192
        if (css) {
          return col ? '100%' : '192px'
        } else {
          return col ? containerWidth : 192
        }
      },
      height({ containerWidth, col }) {
        if (!containerWidth) return 305
        return col ? 191 : 305
      },
      borderRadius: [
        [8, 8, 0, 0],
        [8, 8, 0, 0],
        [8, 0, 0, 8],
      ],
      src: require('@/img/classic-utility-jacket.jpg').default.src,
      originalWidth: 1200,
      originalHeight: 1600,
      loading: 'lazy',
    },
    contentContainer: 'p-6',
    header: '-mt-6 pt-6 pb-6',
    heading: 'flex-auto',
    stock: 'flex-none w-full mt-2',
    button: {
      grid: ['1fr auto', '1fr 1fr auto', 'auto auto 1fr'],
      height: 42,
      borderRadius: 8,
      className: 'px-6',
      primary: {
        class: ['col-span-2', '', ''],
        backgroundColor: colors.gray[900],
        text: 'text-white font-semibold',
      },
      secondary: {
        backgroundColor: colors.white,
        borderColor: colors.gray[200],
        text: 'text-gray-900 font-semibold',
      },
      like: {
        color: colors.gray[300],
      },
    },
    size: {
      container: '',
      list: 'space-x-3',
      button: {
        activeFont: 'font-semibold',
        size: 38,
        borderRadius: 8,
        color: colors.gray[700],
        activeBackgroundColor: colors.gray[900],
        activeColor: colors.white,
      },
    },
    smallprint: {
      container: ['mt-6', 'mt-6', 'mt-6 mb-1'],
      inner: 'text-sm text-gray-700',
    },
  },
  Economics: {
    wrapper: { borderRadius: 12 },
    container: '',
    image: {
      width({ containerWidth, col }, css = false) {
        if (!containerWidth) return 192
        if (css) {
          return col ? '100%' : '192px'
        } else {
          return col ? containerWidth : 192
        }
      },
      height({ containerWidth, col }) {
        if (!containerWidth) return 305
        return col ? 191 : 305
      },
      borderRadius: [
        [8, 8, 0, 0],
        [8, 8, 0, 0],
        [8, 0, 0, 8],
      ],
      src: require('@/img/classic-utility-jacket.jpg').default.src,
      originalWidth: 1200,
      originalHeight: 1600,
      loading: 'lazy',
    },
    contentContainer: 'p-6',
    header: '-mt-6 pt-6 pb-6',
    heading: 'flex-auto',
    stock: 'flex-none w-full mt-2',
    button: {
      grid: ['1fr auto', '1fr 1fr auto', 'auto auto 1fr'],
      height: 42,
      borderRadius: 8,
      className: 'px-6',
      primary: {
        class: ['col-span-2', '', ''],
        backgroundColor: colors.gray[900],
        text: 'text-white font-semibold',
      },
      secondary: {
        backgroundColor: colors.white,
        borderColor: colors.gray[200],
        text: 'text-gray-900 font-semibold',
      },
      like: {
        color: colors.gray[300],
      },
    },
    size: {
      container: '',
      list: 'space-x-3',
      button: {
        activeFont: 'font-semibold',
        size: 38,
        borderRadius: 8,
        color: colors.gray[700],
        activeBackgroundColor: colors.gray[900],
        activeColor: colors.white,
      },
    },
    smallprint: {
      container: ['mt-6', 'mt-6', 'mt-6 mb-1'],
      inner: 'text-sm text-gray-700',
    },
  },
  History: {
    wrapper: { borderRadius: 12 },
    container: '',
    image: {
      width({ containerWidth, col }, css = false) {
        if (!containerWidth) return 192
        if (css) {
          return col ? '100%' : '192px'
        } else {
          return col ? containerWidth : 192
        }
      },
      height({ containerWidth, col }) {
        if (!containerWidth) return 305
        return col ? 191 : 305
      },
      borderRadius: [
        [8, 8, 0, 0],
        [8, 8, 0, 0],
        [8, 0, 0, 8],
      ],
      src: require('@/img/classic-utility-jacket.jpg').default.src,
      originalWidth: 1200,
      originalHeight: 1600,
      loading: 'lazy',
    },
    contentContainer: 'p-6',
    header: '-mt-6 pt-6 pb-6',
    heading: 'flex-auto',
    stock: 'flex-none w-full mt-2',
    button: {
      grid: ['1fr auto', '1fr 1fr auto', 'auto auto 1fr'],
      height: 42,
      borderRadius: 8,
      className: 'px-6',
      primary: {
        class: ['col-span-2', '', ''],
        backgroundColor: colors.gray[900],
        text: 'text-white font-semibold',
      },
      secondary: {
        backgroundColor: colors.white,
        borderColor: colors.gray[200],
        text: 'text-gray-900 font-semibold',
      },
      like: {
        color: colors.gray[300],
      },
    },
    size: {
      container: '',
      list: 'space-x-3',
      button: {
        activeFont: 'font-semibold',
        size: 38,
        borderRadius: 8,
        color: colors.gray[700],
        activeBackgroundColor: colors.gray[900],
        activeColor: colors.white,
      },
    },
    smallprint: {
      container: ['mt-6', 'mt-6', 'mt-6 mb-1'],
      inner: 'text-sm text-gray-700',
    },
  },
  Business: {
    wrapper: { borderRadius: 12 },
    container: '',
    image: {
      width({ containerWidth, col }, css = false) {
        if (!containerWidth) return 192
        if (css) {
          return col ? '100%' : '192px'
        } else {
          return col ? containerWidth : 192
        }
      },
      height({ containerWidth, col }) {
        if (!containerWidth) return 305
        return col ? 191 : 305
      },
      borderRadius: [
        [8, 8, 0, 0],
        [8, 8, 0, 0],
        [8, 0, 0, 8],
      ],
      src: require('@/img/classic-utility-jacket.jpg').default.src,
      originalWidth: 1200,
      originalHeight: 1600,
      loading: 'lazy',
    },
    contentContainer: 'p-6',
    header: '-mt-6 pt-6 pb-6',
    heading: 'flex-auto',
    stock: 'flex-none w-full mt-2',
    button: {
      grid: ['1fr auto', '1fr 1fr auto', 'auto auto 1fr'],
      height: 42,
      borderRadius: 8,
      className: 'px-6',
      primary: {
        class: ['col-span-2', '', ''],
        backgroundColor: colors.gray[900],
        text: 'text-white font-semibold',
      },
      secondary: {
        backgroundColor: colors.white,
        borderColor: colors.gray[200],
        text: 'text-gray-900 font-semibold',
      },
      like: {
        color: colors.gray[300],
      },
    },
    size: {
      container: '',
      list: 'space-x-3',
      button: {
        activeFont: 'font-semibold',
        size: 38,
        borderRadius: 8,
        color: colors.gray[700],
        activeBackgroundColor: colors.gray[900],
        activeColor: colors.white,
      },
    },
    smallprint: {
      container: ['mt-6', 'mt-6', 'mt-6 mb-1'],
      inner: 'text-sm text-gray-700',
    },
  },
}

const imageAnimationVariants = {
  visible: { opacity: [0, 1], zIndex: 2 },
  prev: { zIndex: 1 },
  hidden: { zIndex: 0 },
}

export function HtmlZenGarden({ theme }) {
  const prevTheme = usePrevious(theme)
  const [{ width: containerWidth, col, above }, setContainerState] = useState({
    width: 0,
    col: false,
  })
  const containerRef = useRef()

  const updateWidth = useCallback(
    debounce(() => {
      if (!containerRef.current) return
      const newWidth = Math.round(containerRef.current.getBoundingClientRect().width)
      const newCol =
        window.innerWidth < 640
          ? 'sm'
          : window.innerWidth >= 1024 && window.innerWidth < 1280
          ? 'lg'
          : false
      const newAbove = window.innerWidth < 1024
      if (newWidth !== containerWidth || newCol !== col || newAbove !== above) {
        setContainerState({ width: newWidth, col: newCol, above: newAbove })
      }
    }, 300)
  )

  useEffect(() => {
    const observer = new window.ResizeObserver(updateWidth)
    observer.observe(containerRef.current)
    updateWidth()
    return () => {
      observer.disconnect()
    }
  }, [containerWidth, col, updateWidth])

  const getThemeValue = (key, defaultValue) => {
    const value = dlv(themes[theme], key, defaultValue)
    return Array.isArray(value) ? value[col === 'sm' ? 0 : col === 'lg' ? 1 : 2] : value
  }

  const getImageRadius = (key) => {
    let radius = themes[theme].image.borderRadius
    if (!Array.isArray(radius)) {
      return {
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        borderBottomRightRadius: radius,
        borderBottomLeftRadius: radius,
      }
    }
    if (Array.isArray(radius[0])) {
      radius = radius[col === 'sm' ? 0 : col === 'lg' ? 1 : 2]
    }
    if (!Array.isArray(radius)) {
      return {
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        borderBottomRightRadius: radius,
        borderBottomLeftRadius: radius,
      }
    }
    return {
      borderTopLeftRadius: radius[0],
      borderTopRightRadius: radius[1],
      borderBottomRightRadius: radius[2],
      borderBottomLeftRadius: radius[3],
    }
  }

  return (
    <AnimateSharedLayout>
      <div ref={containerRef} className="relative z-10 my-auto">
        {!containerWidth ? (
          <div className="bg-white rounded-tl-xl sm:rounded-t-xl lg:rounded-xl shadow-xl h-[498px] sm:h-[256px] lg:h-[448px] xl:h-[256px]" />
        ) : (
          <motion.div
            layout
            className="relative shadow-xl flex leading-none"
            initial={false}
            animate={{ borderRadius: getThemeValue('wrapper.borderRadius') }}
          >
            <motion.div
              layout
              className={`bg-white flex w-full ${col ? 'flex-col' : ''} ${getThemeValue(
                'container'
              )}`}
              initial={false}
              animate={{ borderRadius: getThemeValue('wrapper.borderRadius') }}
            >
              <div className="relative flex-none sm:self-start lg:self-auto xl:self-start">
                <motion.div
                  layout
                  className={clsx(
                    'relative z-20 overflow-hidden flex-none',
                    getThemeValue('image.className')
                  )}
                  style={{
                    width: themes[theme].image.width({ containerWidth, col }, true),
                    height: themes[theme].image.height({ containerWidth, col }),
                  }}
                  initial={false}
                  animate={getImageRadius(theme)}
                >
                  {Object.keys(themes).map((name, i) => (
                    <motion.img
                      layout
                      key={name}
                      src={themes[name].image.src}
                      alt=""
                      decoding="async"
                      loading={themes[name].image.loading}
                      className="absolute max-w-none"
                      style={fit(
                        themes[theme].image.width({ containerWidth, col }),
                        themes[theme].image.height({ containerWidth, col }),
                        themes[name].image.originalWidth,
                        themes[name].image.originalHeight
                      )}
                      initial={i === 0 ? 'visible' : 'hidden'}
                      animate={theme === name ? 'visible' : prevTheme === name ? 'prev' : 'hidden'}
                      variants={imageAnimationVariants}
                    />
                  ))}
                </motion.div>
              </div>
              <div
                className={`self-start flex-auto flex flex-wrap items-baseline ${getThemeValue(
                  'contentContainer'
                )}`}
              >
                <div
                  className={`w-full relative flex flex-wrap items-baseline ${
                    getThemeValue('header') || ''
                  }`}
                >
                  <div className={`relative ${themes[theme].heading}`}>
                    <motion.h2
                      layout
                      className={clsx(
                        'inline-flex text-gray-900 text-lg font-semibold',
                        theme === 'Simple' ? '' : 'absolute bottom-0 left-0'
                      )}
                      initial={false}
                      animate={{ opacity: theme === 'Simple' ? 1 : 0 }}
                    >
                      <span className="hidden sm:inline whitespace-pre">Naval Ravikant </span>
                    </motion.h2>
                    <motion.h2
                      layout
                      className={clsx(
                        'inline-flex text-gray-900 text-lg font-semibold',
                        theme === 'Economics' ? '' : 'absolute bottom-0 left-0'
                      )}
                      initial={false}
                      animate={{ opacity: theme === 'Economics' ? 1 : 0 }}
                    >
                      <span className="hidden sm:inline whitespace-pre">Ray Dalio </span>
                    </motion.h2>
                    <motion.h2
                      layout
                      className={clsx(
                        'inline-flex text-gray-900 text-lg font-semibold',
                        theme === 'Business' ? '' : 'absolute bottom-0 left-0'
                      )}
                      initial={false}
                      animate={{ opacity: theme === 'Business' ? 1 : 0 }}
                    >
                      <span className="hidden sm:inline whitespace-pre">Marcus Aurelius </span>
                    </motion.h2>
                    <motion.h2
                      layout
                      className={clsx(
                        'inline-flex text-gray-900 text-lg font-semibold',
                        theme === 'History' ? '' : 'absolute bottom-0 left-0'
                      )}
                      initial={false}
                      animate={{ opacity: theme === 'History' ? 1 : 0 }}
                    >
                      <span className="hidden sm:inline whitespace-pre">Matthew McConaughey </span>
                    </motion.h2>
                  </div>
                  <div className={clsx('relative', themes[theme].price)}>
                    <motion.div
                      className={`inline-flex text-lg font-semibold ${
                        theme === 'Simple' ? '' : 'absolute bottom-0 left-0'
                      }`}
                      layout
                      initial={false}
                      animate={{ opacity: theme === 'Simple' ? 1 : 0 }}
                    >
                      2015
                    </motion.div>
                    <motion.div
                      className={`inline-flex text-lg font-semibold ${
                        theme === 'Economics' ? '' : 'absolute bottom-0 left-0'
                      }`}
                      layout
                      initial={false}
                      animate={{ opacity: theme === 'Economics' ? 1 : 0 }}
                    >
                      2020
                    </motion.div>
                    <motion.div
                      className={`inline-flex text-lg font-semibold ${
                        theme === 'Business' ? '' : 'absolute bottom-0 left-0'
                      }`}
                      layout
                      initial={false}
                      animate={{ opacity: theme === 'Business' ? 1 : 0 }}
                    >
                      1500
                    </motion.div>
                    <motion.div
                      className={`inline-flex text-lg font-semibold ${
                        theme === 'History' ? '' : 'absolute bottom-0 left-0'
                      }`}
                      layout
                      initial={false}
                      animate={{ opacity: theme === 'History' ? 1 : 0 }}
                    >
                      1986
                    </motion.div>
                  </div>
                  <div className={clsx('relative whitespace-nowrap', themes[theme].stock)}>
                    <motion.div
                      layout
                      initial={false}
                      animate={{ opacity: theme === 'Simple' ? 1 : 0 }}
                      className={`inline-flex text-sm font-medium text-gray-700 ${
                        theme === 'Simple' ? '' : 'absolute bottom-0 left-0'
                      }`}
                    >
                      Founder of AngelList
                    </motion.div>
                    <motion.div
                      layout
                      initial={false}
                      animate={{ opacity: theme === 'Business' ? 1 : 0 }}
                      className={`inline-flex text-sm font-medium text-gray-700 ${
                        theme === 'Business' ? '' : 'absolute bottom-0 left-0'
                      }`}
                    >
                      Emperor of Rome
                    </motion.div>
                    <motion.div
                      layout
                      initial={false}
                      animate={{ opacity: theme === 'Economics' ? 1 : 0 }}
                      className={`inline-flex text-sm font-medium text-gray-700 ${
                        theme === 'Economics' ? '' : 'absolute bottom-0 left-0'
                      }`}
                    >
                      Founder of Bridgewater Associates
                    </motion.div>
                    <motion.div
                      layout
                      initial={false}
                      animate={{ opacity: theme === 'History' ? 1 : 0 }}
                      className={`inline-flex text-sm font-medium text-gray-700 ${
                        theme === 'History' ? '' : 'absolute bottom-0 left-0'
                      }`}
                    >
                      Actor/Writer
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </AnimateSharedLayout>
  )
}

/**
 * Scroll-triggered animation system v2
 * Dramatic entrance sequences with GSAP-style timing
 */

const observerOptions = {
  threshold: 0.05,
  rootMargin: '0px 0px -60px 0px',
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const el = entry.target

      // Determine animation type from data attribute
      const animType = el.dataset.animate
      const staggerDelay = parseFloat(el.dataset.stagger) || 0.12
      const isStaggerContainer = el.dataset.stagger !== undefined

      // If stagger container, trigger children in sequence
      if (isStaggerContainer) {
        const items = el.querySelectorAll('.anim-stagger-item, .anim-stagger-heavy')
        el.classList.remove('anim-hidden')
        el.classList.add('anim-visible')

        items.forEach((item, i) => {
          setTimeout(() => {
            item.classList.remove('anim-hidden')
            item.classList.add('anim-visible')
          }, i * staggerDelay * 1000)
        })
      } else {
        // Simple animation: just toggle class
        el.classList.remove('anim-hidden')
        el.classList.add('anim-visible')
      }

      // Stop observing after animation triggered
      observer.unobserve(el)
    }
  })
}, observerOptions)

/**
 * Register an element for scroll-triggered animation
 */
export function observeOnScroll(el) {
  if (!el) return
  el.classList.add('anim-hidden')
  observer.observe(el)
}

/**
 * Clean up observer for an element
 */
export function unobserve(el) {
  if (!el) return
  observer.unobserve(el)
}

// ============================================================
// HERO OPENING SEQUENCE ¡ª dramatic multi-phase entrance
// ============================================================

/**
 * Play the hero opening sequence with dramatic timing
 * @param {Object} refs - Object containing refs to hero elements
 */
export function playHeroOpening(refs) {
  const {
    heroTitle,
    heroSub,
    heroTagline,
    heroDesc,
    heroCta,
    heroStats,
    heroNav,
    heroBg,
  } = refs

  const easePower3Out = 'cubic-bezier(0.16, 1, 0.3, 1)'
  const easePower2InOut = 'cubic-bezier(0.65, 0, 0.35, 1)'
  const easeExpoOut = 'cubic-bezier(0.19, 1, 0.22, 1)'

  const DURATION = 1400
  const STAGGER = 180

  // ---- Apply animated style helper ----
  const animate = (el, props, delay = 0, duration = DURATION) => {
    if (!el) return
    const keys = Object.keys(props)
    const from = {}
    keys.forEach(k => { from[k] = props[k].from })
    const to = {}
    keys.forEach(k => { to[k] = props[k].to })

    // Set initial state
    Object.assign(el.style, from)

    // Force style recalc
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        Object.assign(el.style, {
          transition: keys.map(k => `${k} ${duration}ms ${props[k].ease || easePower3Out}`).join(', '),
          transitionDelay: `${delay}ms`,
        })
        setTimeout(() => {
          Object.assign(el.style, to)
          // Clean up inline styles after animation completes
          setTimeout(() => {
            keys.forEach(k => { el.style[k] = '' })
            el.style.transition = ''
            el.style.transitionDelay = ''
          }, duration + 200)
        }, 20)
      })
    })
  }

  // ---- Helper: clip-path reveal ----
  const clipReveal = (el, delay = 0) => {
    if (!el) return
    el.style.clipPath = 'inset(0 100% 0 0)'
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition = `clip-path ${DURATION}ms ${easePower2InOut}`
        el.style.transitionDelay = `${delay}ms`
        setTimeout(() => {
          el.style.clipPath = 'inset(0 0% 0 0)'
          setTimeout(() => {
            el.style.clipPath = ''
            el.style.transition = ''
            el.style.transitionDelay = ''
          }, DURATION + 200)
        }, 20)
      })
    })
  }

  // ---- Helper: stretch (compress Y then release) ----
  const stretchReveal = (el, delay = 0) => {
    if (!el) return
    el.style.transform = 'scale(1, 0.05)'
    el.style.opacity = '0'
    el.style.filter = 'blur(10px)'
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition = `transform ${DURATION * 1.2}ms ${easeExpoOut}, opacity ${DURATION}ms ease, filter ${DURATION}ms ease`
        el.style.transitionDelay = `${delay}ms`
        setTimeout(() => {
          el.style.transform = 'scale(1, 1.08)'
          el.style.opacity = '1'
          el.style.filter = 'blur(0px)'
          // Second frame: overshoot correction
          setTimeout(() => {
            el.style.transition = `transform 400ms ${easePower3Out}`
            el.style.transform = 'scale(1, 0.97)'
            setTimeout(() => {
              el.style.transition = `transform 300ms ${easePower3Out}`
              el.style.transform = 'scale(1, 1.02)'
              setTimeout(() => {
                el.style.transition = `transform 200ms ${easePower3Out}`
                el.style.transform = 'scale(1, 1)'
                setTimeout(() => {
                  el.style.transform = ''
                  el.style.opacity = ''
                  el.style.filter = ''
                  el.style.transition = ''
                  el.style.transitionDelay = ''
                }, 400)
              }, 300)
            }, 400)
          }, DURATION * 1.2)
        }, 20)
      })
    })
  }

  // ---- Phase 1: Background ----
  if (heroBg) {
    heroBg.style.opacity = '0'
    heroBg.style.transform = 'scale(1.05)'
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        heroBg.style.transition = `opacity 1000ms ease, transform 1200ms ${easePower3Out}`
        heroBg.style.opacity = '1'
        heroBg.style.transform = 'scale(1)'
        setTimeout(() => {
          heroBg.style.opacity = ''
          heroBg.style.transform = ''
          heroBg.style.transition = ''
        }, 1500)
      })
    })
  }

  // ---- Phase 2: Navbar ----
  animate(heroNav, {
    opacity: { from: '0', to: '1' },
    transform: { from: 'translateY(-30px)', to: 'translateY(0)' },
  }, 200, 800)

  // ---- Phase 3: Main title ¡ª stretch reveal (BIG entrance) ----
  if (heroTitle) {
    stretchReveal(heroTitle, 400)
  }

  // ---- Phase 4: Subtitle ----
  animate(heroSub, {
    opacity: { from: '0', to: '1' },
    transform: { from: 'translateY(80px) skewX(-6deg)', to: 'translateY(0) skewX(0deg)' },
  }, 400 + STAGGER, DURATION)

  // ---- Phase 5: Tagline ----
  if (heroTagline) {
    if (heroTagline.length !== undefined) {
      Array.from(heroTagline).forEach((el, i) => {
        animate(el, {
          opacity: { from: '0', to: '1' },
          transform: { from: 'translateY(60px)', to: 'translateY(0)' },
        }, 400 + STAGGER * 2 + i * 100, DURATION * 0.8)
      })
    } else {
      animate(heroTagline, {
        opacity: { from: '0', to: '1' },
        transform: { from: 'translateY(60px)', to: 'translateY(0)' },
      }, 400 + STAGGER * 2, DURATION * 0.8)
    }
  }

  // ---- Phase 6: Description ----
  animate(heroDesc, {
    opacity: { from: '0', to: '1' },
    transform: { from: 'translateY(40px)', to: 'translateY(0)' },
  }, 400 + STAGGER * 4, 1000)

  // ---- Phase 7: CTA buttons ----
  if (heroCta) {
    if (heroCta.length !== undefined) {
      Array.from(heroCta).forEach((el, i) => {
        animate(el, {
          opacity: { from: '0', to: '1' },
          transform: { from: 'translateY(30px)', to: 'translateY(0)' },
        }, 400 + STAGGER * 5 + i * 120, 800)
      })
    } else {
      animate(heroCta, {
        opacity: { from: '0', to: '1' },
        transform: { from: 'translateY(30px)', to: 'translateY(0)' },
      }, 400 + STAGGER * 5, 800)
    }
  }

  // ---- Phase 8: Bottom stats ----
  if (heroStats) {
    const items = heroStats.querySelectorAll('.stat-item, .hero-scroll')
    items.forEach((el, i) => {
      animate(el, {
        opacity: { from: '0', to: '1' },
        transform: { from: 'translateY(40px)', to: 'translateY(0)' },
      }, 400 + STAGGER * 7 + i * 80, 800)
    })
  }
}

// ============================================================
// PARALLAX ENGINE
// ============================================================

let parallaxRAF = null
let parallaxElements = []

function updateParallax() {
  const scrollY = window.scrollY
  parallaxElements.forEach(({ el, speed }) => {
    const rect = el.getBoundingClientRect()
    const viewportCenter = window.innerHeight / 2
    const elCenter = rect.top + rect.height / 2
    const offset = (elCenter - viewportCenter) / viewportCenter
    el.style.transform = `translateY(${offset * speed * 50}px)`
  })
  parallaxRAF = requestAnimationFrame(updateParallax)
}

/**
 * Initialize parallax on elements
 */
export function initParallax() {
  const els = document.querySelectorAll('[data-parallax]')
  els.forEach((el) => {
    const speed = parseFloat(el.dataset.parallax) || 0.3
    parallaxElements.push({ el, speed })
    el.style.willChange = 'transform'
  })
  if (parallaxElements.length > 0 && !parallaxRAF) {
    parallaxRAF = requestAnimationFrame(updateParallax)
  }
}

/**
 * Clean up parallax
 */
export function destroyParallax() {
  if (parallaxRAF) {
    cancelAnimationFrame(parallaxRAF)
    parallaxRAF = null
  }
  parallaxElements = []
}

// ============================================================
// INITIALIZATION
// ============================================================

/**
 * Initialize all scroll-triggered animations on page
 * Call from each section's useEffect
 */
export function initScrollAnimations() {
  // Initialize parallax on any [data-parallax] elements
  initParallax()

  const els = document.querySelectorAll('[data-animate]')
  els.forEach((el) => {
    // If it's a stagger container, pre-mark children
    if (el.dataset.stagger !== undefined) {
      const children = el.children
      Array.from(children).forEach((child) => {
        if (!child.classList.contains('anim-stagger-item') &&
            !child.classList.contains('anim-stagger-heavy')) {
          child.classList.add('anim-stagger-item', 'anim-hidden')
        }
      })
      // Also look for any deeper stagger items
      el.querySelectorAll('.anim-stagger-item, .anim-stagger-heavy').forEach((child) => {
        if (!child.classList.contains('anim-hidden')) {
          child.classList.add('anim-hidden')
        }
      })
    }

    // Start observing
    if (el.classList.contains('anim-hidden')) {
      observer.observe(el)
    } else {
      // Ensure stagger children are hidden if marked
      if (el.dataset.stagger) {
        const items = el.querySelectorAll('.anim-stagger-item, .anim-stagger-heavy')
        items.forEach(item => {
          if (!item.classList.contains('anim-hidden')) {
            item.classList.add('anim-hidden')
          }
        })
      }
      observer.observe(el)
    }
  })
}


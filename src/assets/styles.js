export const styles = {

  typing: {
  floatingButton: `
    fixed
    bottom-61
    right-8
    z-50
    w-15
    h-15
    rounded-full
    flex
    items-center
    justify-center
    bg-gradient-to-br
    from-blue-500
    to-cyan-500
    text-white
    border
    border-white/10
    backdrop-blur-xl
    shadow-[0_0_35px_rgba(59,130,246,0.45)]
    hover:scale-110
    hover:shadow-[0_0_45px_rgba(59,130,246,0.65)]
    active:scale-95
    transition-all
    duration-300
  `,

  icon: `
    text-white
  `,

  modal: `
    relative
    w-[90vw]
    max-w-4xl
    h-[85vh]
    rounded-3xl
    overflow-hidden
    bg-[#151225]
    border
    border-blue-500/20
    shadow-[0_20px_60px_rgba(0,0,0,.6)]
    flex
    flex-col
  `,

  closeButton: `
    absolute
    top-4
    right-4
    z-20
    flex
    items-center
    justify-center
    w-10
    h-10
    rounded-full
    bg-white/10
    border
    border-white/15
    text-white
    transition-all
    hover:bg-blue-500
    hover:scale-110
    active:scale-95
  `,

  header: `
    bg-gradient-to-r
    from-blue-600
    via-cyan-500
    to-blue-700
    text-white
    p-6
    border-b
    border-white/10
  `,

  headerWrapper: `
    space-y-4
  `,

  headerTitle: `
    text-3xl
    font-bold
  `,

  headerSubtitle: `
    text-blue-100
    text-sm
  `,

  timerRow: `
    space-y-3
  `,

  timerInfo: `
    flex
    justify-between
    text-sm
    font-semibold
  `,

  progressTrack: `
    h-3
    rounded-full
    overflow-hidden
    bg-white/15
  `,

  progressBar: `
    h-full
    rounded-full
    bg-gradient-to-r
    from-cyan-300
    to-blue-500
    transition-all
    duration-1000
  `,

  body: `
    flex-1
    overflow-y-auto
    p-6
    space-y-6
  `,

  paragraph: `
    bg-[#0B1120]
    border
    border-slate-700
    rounded-2xl
    p-6
    text-lg
    leading-9
    text-slate-300
    min-h-[170px]
    select-none
  `,

  textarea: `
    w-full
    h-40
    resize-none
    rounded-2xl
    bg-slate-900
    border
    border-slate-700
    p-5
    text-white
    placeholder:text-slate-500
    outline-none
    transition-all
    focus:border-cyan-500
    focus:ring-2
    focus:ring-cyan-500/20
  `,

  statsGrid: `
    grid
    grid-cols-3
    gap-5
  `,

  statCard: `
    rounded-2xl
    border
    border-white/10
    bg-white/5
    p-5
    text-center
    backdrop-blur-xl
  `,

  statLabel: `
    text-slate-400
    text-sm
  `,

  accuracyValue: `
    mt-2
    text-3xl
    font-bold
    text-blue-400
  `,

  mistakeValue: `
    mt-2
    text-3xl
    font-bold
    text-red-400
  `,

  wpmValue: `
    mt-2
    text-3xl
    font-bold
    text-cyan-400
  `,

  restartContainer: `
    flex
    justify-center
  `,

  resultOverlay: `
    flex
    items-center
    justify-center
    h-full
    p-8
  `,

  resultWrapper: `
    w-full
    max-w-4xl
    text-center
    space-y-8
  `,

  resultTitle: `
    text-4xl
    font-bold
    text-white
  `,

  resultSubtitle: `
    text-slate-400
  `,

  resultGrid: `
    grid
    grid-cols-2
    gap-6
  `,

  resultCard: `
    rounded-3xl
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
    p-8
    transition-all
    hover:border-cyan-400/30
    hover:scale-[1.03]
  `,

  resultLabel: `
    text-slate-400
    text-lg
    font-medium
  `,

  badgeContainer: `
    flex
    justify-center
  `,

  legendBadge: `
    px-6
    py-3
    rounded-full
    bg-yellow-500/20
    border
    border-yellow-400/40
    text-yellow-300
    text-xl
    font-bold
  `,

  fastBadge: `
    px-6
    py-3
    rounded-full
    bg-cyan-500/20
    border
    border-cyan-400/40
    text-cyan-300
    text-xl
    font-bold
  `,

  goodBadge: `
    px-6
    py-3
    rounded-full
    bg-blue-500/20
    border
    border-blue-400/40
    text-blue-300
    text-xl
    font-bold
  `,

  practiceBadge: `
    px-6
    py-3
    rounded-full
    bg-purple-500/20
    border
    border-purple-400/40
    text-purple-300
    text-xl
    font-bold
  `,

  buttonRow: `
    flex
    justify-center
    gap-5
    flex-wrap
  `,

  playAgainButton: `
    px-8
    py-4
    rounded-2xl
    bg-gradient-to-r
    from-cyan-500
    to-blue-600
    text-white
    font-semibold
    hover:scale-105
    active:scale-95
    transition-all
  `,

  closeResultButton: `
    px-8
    py-4
    rounded-2xl
    bg-slate-800
    border
    border-slate-700
    text-white
    hover:bg-slate-700
    hover:scale-105
    active:scale-95
    transition-all
  `,
},
  
    debug: {
      floatingButton: `
        fixed
        bottom-43
        right-8
        z-50
        w-15
        h-15
        rounded-full
        flex
        items-center
        justify-center
        bg-gradient-to-br
        from-orange-500
        to-red-500
        text-white
        border
        border-white/10
        backdrop-blur-xl
        shadow-[0_0_35px_rgba(249,115,22,0.45)]
        hover:scale-110
        hover:shadow-[0_0_45px_rgba(249,115,22,0.65)]
        active:scale-95
        transition-all
        duration-300
      `,
  
    overlay: `
      fixed
      inset-0
      z-[60]
      bg-black/70
      backdrop-blur-sm
      flex
      items-center
      justify-center
      p-4
    `,
  
    modal: `
    relative
    w-full
    max-w-2xl
    max-h-[88vh]
    rounded-3xl
    overflow-y-auto
    border
    border-orange-500/20
    bg-[#151225]
    shadow-[0_20px_60px_rgba(0,0,0,.6)]
    flex
    flex-col
  `,
  
    header: `
    flex
    items-start
    gap-4
    px-6
    py-5
    bg-gradient-to-r
    from-orange-500
    via-red-500
    to-pink-500
    text-white
    border-b
    border-white/10
    `,
  
    title: `
      text-2xl
      font-bold
      tracking-wide
    `,
  
    subtitle: `
      text-sm
      text-orange-100
      mt-1
    `,
  
    content: `
    p-6
    text-white
    space-y-5
  `,
  
    question: `
      text-xl
      font-semibold
      leading-relaxed
    `,
  
    codeBlock: `
    bg-[#0B1120]
    border
    border-slate-700
    rounded-xl
    p-4
    font-mono
    text-sm
    leading-6
    text-green-300
    whitespace-pre-wrap
  `,
  
    options: `
      grid
      gap-4
      mt-6
    `,
  
    option: `
    w-full
    text-left
    rounded-xl
    border
    border-slate-700
    bg-slate-800
    px-4
    py-3
    transition-all
    hover:border-orange-500
    hover:bg-slate-700
    hover:scale-[1.02]
    text-white
  `,
  
    selected: `
      border-orange-500
      bg-orange-500/20
    `,
  
    correct: `
      border-green-500
      bg-green-500/20
    `,
  
    wrong: `
      border-red-500
      bg-red-500/20
    `,
  
    explanation: `
      rounded-xl
      border
      border-blue-500/20
      bg-blue-500/10
      p-4
      text-slate-300
      leading-7
    `,
  
    footer: `
      p-6
      border-t
      border-white/10
      flex
      justify-between
      items-center
    `,
  
    progress: `
      text-sm
      text-slate-400
      font-medium
    `,
  
    score: `
      text-lg
      font-bold
      text-orange-400
    `,
  
    nextButton: `
      px-6
      py-3
      rounded-xl
      bg-gradient-to-r
      from-orange-500
      to-red-500
      text-white
      font-semibold
      transition-all
      hover:scale-105
      active:scale-95
      shadow-lg
    `,
  
    restartButton: `
      px-6
      py-3
      rounded-xl
      bg-gradient-to-r
      from-violet-600
      to-fuchsia-500
      text-white
      font-semibold
      transition-all
      hover:scale-105
      active:scale-95
    `,
  
    closeButton: `
    absolute
    top-4
    right-4
    z-20
  
    flex
    items-center
    justify-center
  
    w-10
    h-10
    rounded-full
  
    bg-white/10
    backdrop-blur-md
    border
    border-white/15
  
    text-white
    text-lg
  
    transition-all
    duration-300
  
    hover:bg-red-500
    hover:border-red-400
    hover:shadow-[0_0_18px_rgba(239,68,68,.45)]
    hover:scale-110
  
    active:scale-95
  `,
  
    result: `
      flex
      flex-col
      items-center
      justify-center
      text-center
      py-16
      space-y-6
      text-white
    `,
  
    trophy: `
      text-7xl
    `,
  
    badge: `
      inline-flex
      items-center
      rounded-full
      bg-orange-500/20
      border
      border-orange-500/30
      px-4
      py-2
      text-orange-300
      text-sm
      font-medium
    `,
  
    actionRow: `
      flex
      justify-center
      gap-4
      mt-8
      flex-wrap
    `,
    },
  
  
     chatbot: {
        floatingButton: `
          fixed
          bottom-25
          right-8
          z-50
          w-15
          h-15
          rounded-full
          flex
          items-center
          justify-center
          bg-gradient-to-br
          from-[#7C3AED]
          via-[#8B5CF6]
          to-[#C026D3]
          text-white
          border border-white/10
          backdrop-blur-xl
          shadow-[0_0_35px_rgba(168,85,247,0.45)]
          hover:scale-110
          hover:shadow-[0_0_45px_rgba(168,85,247,0.65)]
          active:scale-95
          transition-all
          duration-300
        `,
  
        window: `
          fixed
          bottom-41
          right-8
          z-50
          w-[390px]
          h-[620px]
          rounded-3xl
          overflow-hidden
          border border-violet-500/20
          bg-[#151225]/95
          backdrop-blur-2xl
          shadow-[0_20px_60px_rgba(76,29,149,.35)]
          flex
          flex-col
        `,
  
        header: `
          flex-shrink-0
          px-6
          py-5
          border-b
          border-violet-400/20
          bg-gradient-to-r
          from-[#7C3AED]
          via-[#8B5CF6]
          to-[#C026D3]
          text-white
        `,
  
        messages: `
          flex-1
          overflow-y-auto
          px-5
          py-5
          space-y-4
          text-white
          scroll-smooth
        `,
  
        emptyText: `
          h-full
          flex
          flex-col
          items-center
          justify-center
          text-center
          text-slate-400
          text-sm
          leading-7
        `,
  
        userBubble: `
          inline-block
          px-4
          py-3
          rounded-2xl
          rounded-br-md
          bg-gradient-to-r
          from-[#7C3AED]
          via-[#8B5CF6]
          to-[#C026D3]
          text-white
          shadow-lg
          max-w-[80%]
          break-words
        `,
  
        botBubble: `
          inline-block
          px-4
          py-3
          rounded-2xl
          rounded-bl-md
          bg-slate-800/90
          border
          border-slate-700
          text-slate-100
          max-w-[80%]
          break-words
        `,
  
        inputContainer: `
          flex-shrink-0
          p-4
          border-t
          border-violet-400/20
          bg-slate-900/70
          backdrop-blur-xl
          flex
          gap-3
          items-center
        `,
  
        input: `
          flex-1
          h-11
          rounded-xl
          bg-slate-800
          border
          border-slate-700
          px-4
          text-white
          placeholder:text-slate-500
          outline-none
          transition
          focus:border-violet-500
          focus:ring-2
          focus:ring-violet-500/20
        `,
  
        sendButton: `
          h-11
          px-5
          rounded-xl
          bg-gradient-to-r
          from-[#7C3AED]
          via-[#8B5CF6]
          to-[#C026D3]
          text-white
          font-medium
          hover:scale-105
          hover:shadow-lg
          hover:shadow-violet-500/30
          active:scale-95
          transition-all
        `,
      },
  
     backToTop: {
    button: `
      fixed
      bottom-8
      right-8
      z-50
      w-14
      h-14
      rounded-full
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-blue-600
      to-cyan-500
      text-white
      border
      border-white/10
      backdrop-blur-xl
      shadow-[0_0_35px_rgba(59,130,246,0.45)]
      hover:scale-110
      hover:shadow-[0_0_45px_rgba(59,130,246,0.65)]
      active:scale-95
      transition-all
      duration-300
    `,
      },
  
      navbar: {
        header:
          "fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#0b1120]/70 border-b border-white/10",
      
        container:
          "max-w-7xl mx-auto px-6 py-5 flex items-center justify-between",
      
        logo:
          "text-2xl font-bold cursor-pointer transition-all duration-300 hover:scale-105 hover:text-cyan-400",
      
        logoDot: "text-cyan-400",
      
        nav: "hidden md:flex gap-10 text-sm",
      
        link:
          "relative text-white/70 font-medium transition-all duration-300 hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full",
      },
      
      hero: {
        section: "max-w-7xl mx-auto px-6 pt-44 pb-32",
        grid: "grid lg:grid-cols-2 gap-20 items-center",
        badge:
          "inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 rounded-full text-sm text-cyan-300 mb-8",
        badgeDot: "w-2 h-2 bg-green-400 rounded-full animate-pulse",
        // text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-pulse
        title:
          " text-6xl md:text-8xl font-extrabold leading-[0.95] tracking-tight bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent",
        paragraph: "text-slate-400 text-lg leading-8 mt-8 max-w-xl",
        buttonRow: "flex flex-wrap gap-4 mt-10",
        primaryBtn:
          " bg-cyan-400 text-black px-7 py-4 rounded-2xl font-semibold hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition duration-300",
        secondaryBtn:
          " border border-purple-400/20 bg-purple-400/10 text-purple-300 px-7 py-4 rounded-2xl hover:bg-purple-400 hover:text-black transition duration-300",
        rightWrapper: "relative",
        glow: "absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full",
        card:
          " relative border border-white/10 bg-[#111827]/60 backdrop-blur-2xl rounded-[40px] p-10",
        cardInner:
          "aspect-square rounded-[30px] bg-gradient-to-br from-cyan-500/20 to-purple-500/10 border border-white/10 flex items-center justify-center",
        avatarRing:
          "w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 p-[3px] mx-auto mb-6",
        avatarInner: "w-full h-full rounded-full bg-[#050816]",
        cardTitle: "text-3xl font-bold animate-bounce",
        cardSubtitle: "text-slate-400 mt-3",
  
        socialRow:
        "animate-pulse flex justify-center gap-4 mt-6 flex-wrap",
    
      socialLink:
        "px-4 py-2 rounded-lg border border-zinc-600 text-zinc-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 font-medium text-sm",
      },
    
      skills: {
        section: "max-w-7xl mx-auto px-6 py-28 border-t border-white/10",
      
        header:
          "flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16",
      
        eyebrow:
          "text-cyan-400 uppercase tracking-[0.3em] text-sm mb-5",
      
        title:
          "text-5xl font-bold",
      
        description:
          "text-slate-400 max-w-lg leading-8",
      
        grid:
          "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4",
      
        card:
          "border border-white/10 bg-white/5 rounded-2xl px-4 py-4 text-center backdrop-blur-xl hover:bg-cyan-400 hover:text-black hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:-translate-y-1 transition-all duration-300 cursor-pointer",
      
        cardTitle:
          "text-sm md:text-base font-semibold",
      },
    
      projects: {
        section: "max-w-7xl mx-auto px-6 py-28 border-t border-white/10",
        header: "mb-16",
        eyebrow: "text-cyan-400 uppercase tracking-[0.3em] text-sm mb-5",
        title: "text-5xl font-bold",
        list: "space-y-8",
        card:
          "group border border-white/10 bg-white/5 rounded-[35px] p-8 md:p-12 backdrop-blur-xl hover:bg-[#111827] hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-500",
        cardGrid: "grid md:grid-cols-2 gap-10 items-center",
        category: "text-sm uppercase tracking-[0.2em] text-cyan-400 mb-4",
        projectTitle: "text-4xl font-bold mb-6",
        description: "leading-8 text-slate-400 text-lg",
        buttonRow: "flex flex-wrap gap-4 mt-8",
        viewBtn:
          "animate-pulse border border-cyan-400/30 text-cyan-300 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition",
        sourceBtn:
          "border border-purple-400/20 bg-purple-400/10 text-purple-300 px-6 py-3 rounded-xl hover:bg-purple-400 hover:text-black transition",
        preview:
          "h-72 rounded-[30px] border border-white/10 bg-gradient-to-br from-cyan-500/20 to-purple-500/10 group-hover:scale-[1.02] group-hover:border-cyan-400/20 transition-all duration-500",
        previewInner: "w-full h-full flex items-center justify-center",
        previewText: "text-white/30 text-lg",
      },
      
      about: {
        section: "max-w-7xl mx-auto px-6 py-28 border-t border-white/10",
        grid: "grid lg:grid-cols-2 gap-20",
        eyebrow: "text-cyan-400 uppercase tracking-[0.3em] text-sm mb-5",
        title: " text-5xl font-bold leading-tight",
        paragraph: "text-slate-400 leading-9 text-lg",
        statsGrid: "animate-pulse grid grid-cols-2 gap-6 mt-12",
        statCard: "border border-white/10 bg-white/5 rounded-3xl p-6 backdrop-blur-xl",
        statNumberCyan: "text-4xl font-bold text-cyan-400",
        statNumberPurple: "text-4xl font-bold text-purple-400",
        statLabel: "text-white/40 mt-2",
      },
    
      contact: {
        section:
          "max-w-5xl mx-auto px-6 py-32 border-t border-white/10 text-center",
        eyebrow: "text-cyan-400 uppercase tracking-[0.3em] text-sm mb-5",
        title: "text-5xl md:text-7xl font-bold leading-tight",
        paragraph: "text-slate-400 text-lg leading-8 mt-8 max-w-2xl mx-auto",
        email: "mt-8 text-lg text-white",
        hint: "text-slate-400 mt-3",
        button:
          "animate-bounce mt-12 bg-cyan-400 text-black px-10 py-5 rounded-2xl font-semibold hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition duration-300 inline-flex items-center gap-2",
      },
    
      footer: {
        footer: "border-t border-white/10 py-8 text-center text-white/40 text-sm",
        container: "max-w-7xl mx-auto px-6",
        linkRow: "flex justify-center gap-6 mt-4",
        link: "hover:text-cyan-400 transition",
      },
    };
  
    export const projectModal = {
      overlay:
        "fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6",
    
      container: "relative w-full max-w-5xl",
    
      closeBtn:
        "absolute -top-14 right-0 text-white text-4xl hover:text-red-400 transition",
    
      title: "text-white text-3xl font-bold text-center mb-6",
    
      imageWrapper: "relative",
    
      image:
        "w-full max-h-[75vh] object-contain rounded-xl shadow-2xl",
    
      navBtn:
        "absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cyan-600/20 hover:bg-cyan-600/40 text-white text-2xl transition",
    
      prevBtn: "left-4",
    
      nextBtn: "right-4",
    
      counter: "text-center text-gray-300 mt-4",
    
      thumbnails: "flex justify-center gap-3 mt-6 flex-wrap",
    
      thumbnail:
        "w-24 h-16 object-cover rounded-lg cursor-pointer transition border-2",
    
      thumbnailActive: "border-blue-500 scale-110",
    
      thumbnailInactive:
        "border-transparent opacity-60 hover:opacity-100",
    };
  
    
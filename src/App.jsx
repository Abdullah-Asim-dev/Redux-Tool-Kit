import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white flex flex-col items-center justify-start py-12 px-4 relative overflow-y-auto">

      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container - Controlled width and perfectly centered */}
      <div className="w-full max-w-2xl relative z-10 flex flex-col gap-6">
        
        {/* Header Section */}
        <header className="text-center mb-4">
          <h1 className="text-4xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 drop-shadow-sm">
            Todo App
          </h1>
          <p className="text-slate-500 text-xs mt-1 tracking-wider uppercase font-semibold">
            Redux Toolkit Workspace
          </p>
        </header>

        {/* Input Box Section (Centered) */}
        <section className="bg-slate-900/60 backdrop-blur-md p-5 rounded-2xl border border-slate-800/80 shadow-xl">
          <AddTodo />
        </section>

        {/* Tasks List Section (Centered) */}
        <section className="bg-slate-900/40 backdrop-blur-md p-5 rounded-2xl border border-slate-800/50 shadow-xl min-h-[200px]">
          <Todos />
        </section>

      </div>
    </div>
  )
}

export default App

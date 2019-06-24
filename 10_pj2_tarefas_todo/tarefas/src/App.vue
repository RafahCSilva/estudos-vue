<template>
  <div id="app">
    <h1>Tarefas</h1>
    <TaskProgress
      :progress="progress"
    />
    <NewTask
      @taskAdded="taskAdded"
    />
    <TaskGrid
      :tasks="tasks"
      @taskDeleted="taskDeleted"
      @taskStateChanged="taskStateToggle"
    />
  </div>
</template>

<script>
  import TaskGrid from './components/TaskGrid'
  import NewTask from './components/NewTask'
  import TaskProgress from './components/TaskProgress'

  export default {
    components: { TaskProgress, NewTask, TaskGrid },
    data() {
      return {
        tasks: [
          { name: 'lavar Louça', pending: false },
          { name: 'Dormir', pending: true },
        ]
      }
    },
    methods: {
      taskAdded( task ) {
        if ( this.tasks.filter( t => t.name === task.name ).length === 0 ) {
          this.tasks.push( {
            name: task.name,
            pending: task.pending || true
          } )
        }
      },
      taskDeleted( id ) {
        this.tasks.splice( id, 1 )
      },
      taskStateToggle( id ) {
        this.tasks[ id ].pending = !this.tasks[ id ].pending
      }
    },
    computed: {
      progress() {
        const total = this.tasks.length
        const done = this.tasks.filter( t => !t.pending ).length
        return Math.round( done / total * 100 ) || 0
      }
    },

    // Salvando no LocalStorage
    watch: {
      tasks: {
        deep: true,
        handler() {
          localStorage.setItem( 'tasks', JSON.stringify( this.tasks ) )
        }
      }
    },
    created() {
      const json = localStorage.getItem( 'tasks' )
      let array = JSON.parse( json )
      if ( Array.isArray( array ) ) {
        this.tasks = array || []
      } else {
        this.tasks = []
      }
    }

  }
</script>

<style>
  body {
    font-family: 'Lato', sans-serif;
    background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
    color: #FFF;
  }

  #app {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  #app h1 {
    margin-bottom: 5px;
    font-weight: 300;
    font-size: 3rem;
  }
</style>

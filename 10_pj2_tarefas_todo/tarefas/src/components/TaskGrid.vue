<template>
  <div class="task-grid">
    <template v-if="tasks.length">
      <Task
        v-for="(task, idx) in tasks"
        :key="task.name"
        :task="task"
        @taskDeleted="$emit( 'taskDeleted', idx )"
        @taskStateChanged="$emit( 'taskStateChanged', idx )"
      />
    </template>
    <p v-else class="no-task">Sua vida está em dia =D</p>
  </div>
</template>

<script>
  import Task from './Task'

  export default {
    name: 'TaskGrid',
    components: { Task },
    props: {
      tasks: {
        type: Array
      },
    },
  }
</script>

<style scoped>
  .task-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .task-grid .task {
    margin: 10px;
  }

  .no-task {
    color: #AAA;
    font-size: 1.7rem;
  }
</style>

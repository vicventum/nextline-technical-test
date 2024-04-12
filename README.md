# Technical Test: Task App

El siguiente es un proyecto para una prueba técnica para el puesto de _Frontend Developer_, en el que se me pidió crear una aplicación de tareas que permita hacer las operaciones de un _CRUD_ básico usando una _API_ que me fue provista. 

Para ello se me pidió realizarla con _Vue 2_, _Nuxt_, y _Vuetify_, cumpliendo los requerimientos que se especifican más a continuación.

<img src="https://i.imgur.com/4pKwJPs.png" title="Home" />

## Tabla de contenido
- [Resumen](#resumen)
   - [El desafío](#el-reto)
   - [Aspectos a evaluar](#aspectos-a-evaluar)
   - [Capturas de pantalla](#capturas-de-pantalla)
   - [Enlaces](#enlaces)
- [Mi proceso](#mi-proceso)
   - [Construido con](#construido-con)
   - [Lo que aprendí](#que-aprend%C3%AD)
   - [Desarrollo continuo](#desarrollo-continuo)
   - [Recursos útiles](#recursos-útiles)
- [Autor](#autor)


## Resumen

### El reto

Deberás realizar un sistema de gestión de tareas. 

El sistema web deberá permitir _visualizar_, _agregar_, _editar_, _eliminar_ tareas mediante la conexión con la API que te proporcionamos.

Cada tarea debe tener la siguiente información. Algunos campos son opcionales de llenar por el usuario, pero sí deben estar presentes en la interfaz:

- Título (Obligatorio)
- Completada o no completada (Obligatorio)
- Fecha (Opcional)
- Comentarios (Opcional)
- Descripción (Opcional)
- Tags (Opcional)

La visualización de las tareas debe ser en formato lista con la posibilidad de abrir
individualmente cada una de las tareas.

### Aspectos a evaluar

- Uso de _Vue.js v2_ + _Nuxt.js_ + _Vuetify_
- Funcionamiento del sistema
- Estructura del proyecto
- Diseño general del sistema
- Diseño responsivo
- Conexión con la API
- Buenas prácticas de programación

### Capturas de pantalla

<img src="https://i.imgur.com/4pKwJPs.png" title="Home" />
<img src="https://i.imgur.com/ASFDiJD.png" title="New task" />
<img src="https://i.imgur.com/WQKvhbH.png" title="Task detail" />
<img src="https://i.imgur.com/goKqUQt.png" title="Edit task" />

### Enlaces

- URL de la solución: https://github.com/vicventum/nextline-technical-test/tree/develop
- URL del sitio en vivo: [https://vicventum.github.io/nextline-technical-test/](https://vicventum.github.io/nextline-technical-test/)

## Mi proceso

### Construido con

- Semantic HTML5 markup
- CSS 3
- Flexbox / CSS Grid
- JavaScript
- [Vue v2](https://reactjs.org/) - JS framework
- [Nuxt](https://nextjs.org/) - Vue framework
- [Vuetify](https://nextjs.org/) - For styles
- Jest / Vue Test Utils - Para testing
- Axios - Para llamadas HTTP
- ESLint / Prettier - Para formateo de código

### Que aprendí

En este proyecto pude aplicar varios de los conceptos que estuve aprendiendo últimamente sobre principios _SOLID_ y _Clean Code_.


#### Open-Close e Inyección de Dependencias para proveedores HTTP


Un ejemplo de ello se ve reflejado en la sección del manejo de solicitudes HTTP, donde apliqué el principio de _Abierto-Cerrado_ y el patrón _Adaptador_ con la _Inyección de Dependencias_ para usar un servicio que reciba por parámetro un proveedor y ejecute las acciones de este:

**components/tasks/services/task-service.js**
```js
let taskList = []
let task = {}

export async function getTaskList(getAll) {
  taskList = await getAll()

  return taskList
}
export async function getTask(get, taskId) {
  task = await get(taskId)
  return task
}

export async function createTask(create, task) {
  await create(task)
}

export async function deleteTask(remove, taskId) {
  await remove(taskId)
}
export async function editTask(edit, taskId, newData) {
  await edit(taskId, newData)
}
```

Siendo usado de esta forma:

**components/tasks/mixins/mixin-task-list.js**
```js
// ...
import { getAll } from '@/components/tasks/services/providers/task-axios-provider.js'
import { getTaskList } from '@/components/tasks/services/task-service.js'

const mixinTask = {
  //...
  methods: {
    ...mapMutations('task.store', ['setTaskList']),
    async mixinGetTaskList() {
      const provider = getAll
      try {
        this.mixinTaskList.isLoading = true
        const rawTaskList = await getTaskList(provider) // 👈
        this.mixinTaskList.isLoading = false

        const taskList = utilFormatTaskList(rawTaskList)
        this.setTaskList(taskList)
      } catch (error) {
        console.error(error)
        this.mixinTaskList.isError = true
        this.mixinTaskList.isLoading = false
      }
    },
    },
  },
}

export default mixinTask
```

Dicho proveedor estará atado a la implementación de una dependencia en concreto, en este caso Axios:

**components/tasks/services/providers/task-axios-provider.js**
```js
import axiosClient from '@/services/api-client'

export async function getAll() {
  const resp = await axiosClient.get('/tasks')
  return resp.data
}
export async function get(taskId) {
  const resp = await axiosClient.get(`/tasks/${taskId}`)
  return resp.data
}

export async function create(task) {
  await axiosClient.post('/tasks', task)
}
export async function remove(taskId) {
  await axiosClient.delete(`/tasks/${taskId}`)
}
export async function edit(taskId, newData) {
  await axiosClient.put(`/tasks/${taskId}`, newData)
}

```

De esta manera, si tenemos una nueva implementación (por ejemplo que use la API `fetch` u otra dependencia), simplemente tendríamos que crear un nuevo proveedor para esa dependencia y pasárselo al servicio:

**components/tasks/mixins/mixin-task-list.js**
```js
// ...
import { getAll } from '@/components/tasks/services/providers/task-fetch-provider.js' // 👈
import { getTaskList } from '@/components/tasks/services/task-service.js'

const mixinTask = {
  //...
  methods: {
    ...mapMutations('task.store', ['setTaskList']),
    async mixinGetTaskList() {
      const provider = getAll // 👈
      try {
        this.mixinTaskList.isLoading = true
        const rawTaskList = await getTaskList(provider)
        this.mixinTaskList.isLoading = false

        const taskList = utilFormatTaskList(rawTaskList)
        this.setTaskList(taskList)
      } catch (error) {
        console.error(error)
        this.mixinTaskList.isError = true
        this.mixinTaskList.isLoading = false
      }
    },
    },
  },
}

export default mixinTask
```

Con ello, podemos cambiar de dependencia fácilmente sin tener que modificar el código en varios lugares a la vez, solo tenemos que crear un nuevo proveedor en cada caso que tengan los mismo métodos para que el servicio pueda ejecutarlo.


#### Single Responsability y Mixins para la gestión de estado


Relacionado a las solicitudes HTTP, para el manejo del estado de estas solicitudes creé un mixin separado para cada caso de uso (obtener un listado de tareas, crear una tarea, etc.).

Esto lo hice de esta forma para no manejar la lógica de la gestión del estado en el store de _Vuex_, y solo usar a este para su propósito base: servir como store centralizado de datos.

> [!note]
> Para ejemplificar cada caso creé 2 ramas distintas en la que uso un enfoque distinto: “`feature/store-approach`” donde se gestiona el estado de la solicitudes HTTP en el Store, y “`feature/mixin-approach`” en la que se hace mismo pero usando mixins (dicha rama es la que al final fué mergeada a “develop” por ser el enfoque elegido)

Adopté este enfoque basado en los mismos principios que sigue los _composables_ en _Vue 3_ para extraer y compartir lógica con estado entre componentes, pero que debido estos no están disponibles en _Vue 2_ (al menos no de forma nativa), decidí usar su símil más cercano los cuales son los _mixins_.

Por ejemplo en este caso el siguiente _mixin_ maneja el estado del caso de uso de obtener una tarea en específico:

```ts
import { mapGetters, mapMutations } from 'vuex'
import { get } from '@/components/tasks/services/providers/task-axios-provider.js'
import { getTask } from '@/components/tasks/services/task-service.js'
import { utilFormatTask } from '@/components/tasks/utils'

const mixinTask = {
  data() {
    return {
      mixinTask: {
        data: {},
        isLoading: false,
        isError: false,
      },
    }
  },
  async fetch() {
    const taskId = this.$route.params.id
    await this.mixinGetTask(taskId)
  },
  computed: {
    ...mapGetters('task.store', ['task']),
  },
  watch: {
    task(newTask, oldValue) {
      this.mixinTask.data = newTask
    },
  },
  methods: {
    ...mapMutations('task.store', ['setTask']),
    async mixinGetTask(taskId) {
      const provider = get
      try {
        this.mixinTask.isLoading = true
        const rawTask = await getTask(provider, taskId)
        this.mixinTask.isLoading = false

        const task = utilFormatTask(rawTask)
        this.setTask(task)
      } catch (error) {
        console.error(error)
        this.mixinTask.isError = true
        this.mixinTask.isLoading = false
      }
    },
  },
}

export default mixinTask
```

Aún así es bien sabido que los _mixins_ tienen algunas limitaciones, entre ellas **la rastreabilidad**, la cual pude solventar en gran medida simplemente agregando el prefijo `mixin` para cada data property o método que este exponga. 

De manera que al usar algún dato del _mixin_ en un componente, se vea reflejado de donde viene esa propiedad o método:


```html
<script>
import ErrorHandler from '@/components/shared/ErrorHandler.vue'
import TaskDetailMetadata from '@/components/tasks/details/TaskDetailMetadata.vue'
import TaskDetailContent from '@/components/tasks/details/TaskDetailContent.vue'
import TaskDetailFooter from '@/components/tasks/details/TaskDetailFooter.vue'
import { MixinTask } from '@/components/tasks/mixins'

export default {
  components: {
    TaskDetailMetadata,
    TaskDetailContent,
    TaskDetailFooter,
    ErrorHandler,
  },
  mixins: [MixinTask],
}
</script>

<template>
  <div>
    <ErrorHandler
      :is-loading="mixinTask.isLoading"
      :is-error="mixinTask.isError"
      :is-empty="!mixinTask.data.id"
    >
      <TaskDetailMetadata
        :id="mixinTask.data.id"
        class="mb-6"
        :title="mixinTask.data.title"
        :is-completed="mixinTask.data.isCompleted"
        :due-date="mixinTask.data.dueDate"
        :tags="mixinTask.data.tags"
        :created-at="mixinTask.data.createdAt"
      />
      <TaskDetailContent
        class="mb-6"
        :description="mixinTask.data.description"
        :comments="mixinTask.data.comments"
      />
    </ErrorHandler>
    <TaskDetailFooter
      v-if="!mixinTask.isError"
      :id="mixinTask.data.id"
      :class="{ 'mt-10': mixinTask.isLoading }"
      :is-loading="mixinTask.isLoading"
    />
  </div>
</template>
```


#### Testing


Pese a que en las especificaciones de la prueba técnica no se requería que se realizaran tests en la aplicación, decidí agregar algunos tests que cubren algunos casos base, más que todo para ejemplificar cómo se puede testear una aplicación que use _Vue 2_ y _Nuxt_ con _Jest_ y _Vue Test Utils_.

Inicialmente quise seguir la recomendación actual que hace el equipo de _Vue.js_ y usar _Vue Testing Library_ como librería de test, ya que expone una API más legible y cómoda de usar, pero me encontré con el inconveniente que para Nuxt 2, _Vue Testing Library_ no tenía del todo compatibilidad, ya que existen funcionalidades particulares como los hooks `fetch` y `asyncData` que _Vue Testing Library_ no contempla.

Es por ello que decidí irme por un enfoque más "clásico" y usar _Vue Test Utils_ para esta tarea, en donde si bien este tampoco adopta de forma nativa los hooks `fetch` y `asyncData` de _Nuxt 2_, al exponer la instancia del componente montado, podemos ejecutar manualmente dichos hooks justo después de montar el componente.

Por ejemplo, en el siguiente test podemos ver cómo ejecutamos el hook `fetch` del mixin que usa el componente al montarse:

```js
describe('When a user lands on page', () => {
  test('should render the jobs', async () => {
    const taskList = [
      {
        id: 1951,
        title: 'Test title',
        is_completed: 0,
        due_date: '2024-04-06',
      },
    ]

    getTaskList.mockResolvedValue(Promise.resolve(taskList))

    const wrapper = mount(TaskListContainer, {
      store: { moduleName: 'task.store', store: taskStore },
    })
    // ? Ejecuta el hook `fetch` de Nuxt
    await TaskListContainer.mixins[0].fetch.call(wrapper.vm) // 👈

    const task = wrapper.find(`[data-testid="task-${taskList[0].id}"]`)

    expect(task.exists()).toBe(true)
    expect(task.text()).toMatch(taskList[0].title)
  })
})
```


### Desarrollo continuo

Posteriormente planeo llevar la escalabilidad del proyecto aún más allá he implementar una estrategia de _Arquitectura Hexagonal_ para mejorar aún más la estructura de carpetas del proyecto y potenciar en mayor medida la robustez y resistencia al cambio de este.

### Recursos útiles

- [Video de SOLID en Fronted de Midudev](https://www.youtube.com/watch?v=jKdt-BnTTR0): Con este video pude trasladar más fácilmente los principios SOLID al frontend, permitiendome aplicar dichos conceptos de forma más rápida y clara en el proyecto
- [Respuesta en Stack Overflow sobre v-model en componentes anidados](https://stackoverflow.com/a/47312172): Gracias a esta respuesta en _Stack Overflow_ pude pasar más fácilmente valores enlazados con `v-model` a través de varios componentes anidados. Anteriormente lo hacía con un `watch` que observaba los cambios de la propiedad `value` del componente, pero este enfoque no funcionaba del todo bien cuando se pasaba a través de varios componentes anidados

## Autor

- Sitio web personal: https://vicventum.web.app
- Perfil de LinkedIn:  https://linkedin.com/in/victor-alvarez-frontend

---

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run generate
```

Locally preview production build:

```bash
# npm
npm run start
```

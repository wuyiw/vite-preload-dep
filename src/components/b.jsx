import { defineComponent } from 'vue'
import style from './common.module.less'

export default defineComponent({
  id: 'b',
  render() {
    return (
      <>
        <section class={style.root}>b</section>
      </>
    )
  },
})

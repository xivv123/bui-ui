<template>
  <input
    ref="_ref"
    :class="[
      'biu-input',
      `bg-${_color}-500`,
      `hover:bg-${_color}-400`,
      `${roundClass}`,
      'cursor-pointer',
      { 'hover-enlarge': !props.disabled && !props.grayOut },
      { 'gray-out': props.grayOut },
      { 'plain': props.plain },
      { 'circle': props.circle }
    ]"
    :disabled="props.disabled || props.grayOut"
    @input="handleInput"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

type InputTypes = 'default' | 'primary' | 'success' | 'danger' | 'Warning'
type InputSizes = 'large' | 'small' | [string, string]

const props = withDefaults(
  defineProps<{
    modelValue?: string // v-model 双向绑定的值
    disabled?: boolean // 输入框是否为禁用
    round?: boolean // 是否圆角
    type?: InputTypes
    color?: string
    grayOut?: boolean // 是否置灰
    size?: InputSizes // 输入框的大小
    plain?: boolean // 是否为朴素输入框
    circle?: boolean // 是否为圆形输入框
    number?: boolean // 是否只能输入数字
  }>(),
  {
    modelValue: '',
    disabled: false,
    type: 'default',
    color: '',
    round: false,
    grayOut: false,
    size: 'large',
    plain: false,
    circle: false,
    number: false
  }
)

const roundClass = computed(() => (props.round ? 'rd-4' : 'rd-1'))
const _ref = ref<HTMLInputElement>()
const _color = computed(() => {
  return props.type == 'primary'
    ? 'blue'
    : props.type == 'Warning'
    ? 'pink'
    : props.type == 'success'
    ? 'green'
    : props.type == 'danger'
    ? 'red'
    : ''
})

const _size = computed(() => {
  if (Array.isArray(props.size)) {
    return { width: props.size[0], height: props.size[1] }
  } else {
    return props.size === 'large' ? { width: '100px', height: '50px' } : { width: '50px', height: '25px' }
  }
})

defineExpose({
  ref: _ref
})

// 处理输入事件
const handleInput = (event: InputEvent) => {
  if (props.number) {
    const value = (event.target as HTMLInputElement).value
    const numericValue = value.replace(/[^0-9]/g, '')
    props.modelValue = numericValue
  }
}
</script>

<style lang="scss" scoped>
.hover-enlarge:hover {
  transform: scale(1.1);
  transition: transform 0.3s;
}
.gray-out {
  background-color: gray !important;
  cursor: not-allowed;
}
.plain {
  background-color: transparent !important;
  border: 1px solid currentColor;
}
.circle {
  border-radius: 50%;
}
</style>
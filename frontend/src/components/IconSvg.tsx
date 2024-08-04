import '../assets/styles/icon-svg.scss'
interface SvgIconProps {
  name: string // svg名字
  size?: string // 大小
  color?: string // 填充颜色
}

const SvgIcon = (props: SvgIconProps) => {
  const { name, color, size } = props
  return (
    <svg className={`svg-icon icon-${name}`} style={{ color: color, fontSize: size }}>
      <use href={`#icon-${name}`} />
    </svg>
  )
}

export default SvgIcon

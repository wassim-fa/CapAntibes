import Colors from '@/enums/colors'
import { useIsLaptop } from '@/hooks'
import { TCssAlign, TMargin } from '@/interfaces'
import { PropsWithChildren } from 'react'
import Column from '../Column'
import Row from '../Row'

type RowToColumnProps = {
  align: TCssAlign
  marginForRow: TMargin
  marginForColumn: TMargin
  className?: string
  bgColor?: Colors
  isReverseForRow?: boolean
  isReverseForColumn?: boolean
}
const RowToColumn = ({
  align,
  marginForRow,
  marginForColumn,
  className = '',
  bgColor = Colors.PRIMARY,
  isReverseForRow = false,
  isReverseForColumn = false,
  children
}: PropsWithChildren<RowToColumnProps>) => {
  const isLaptop = useIsLaptop()
  if (isLaptop) {
    return (
      <Row
        className={className}
        opt_alignItems={align}
        opt_margin={marginForRow}
        opt_reverse={isReverseForRow}
        opt_bgColor={bgColor}
      >
        {children}
      </Row>
    )
  } else {
    return (
      <Column
        className={className}
        opt_alignItems={align}
        opt_margin={marginForColumn}
        opt_reverse={isReverseForColumn}
        opt_bgColor={bgColor}
      >
        {children}
      </Column>
    )
  }
}

export default RowToColumn

/**
 * 
 * Stack Box Time component
 * @author - NA 
 * @date - 24th May, 2024
 * 
 */
// GENERIC IMPORT
import clsx from 'clsx';
import { Box, Tooltip } from '@chakra-ui/react';

// UTILS
import type {StackItemType} from '../../../utils/types';
import {StackTypeEnum} from '../../../utils/enum';

// STYLE IMPORT
import './styles.css';

type StackBoxProps = {
  data: StackItemType[];
  noBottomBorder?: boolean;
}

const StackBox = ({
  data,
  noBottomBorder
}: StackBoxProps) => {

  const truncate = (val: string) => {
    return val.length > 7 ? `${val.slice(0, 5)}...` : val;
  }

  return (
    <Box className='control-stack'>
        {data.length ? data?.map((item, index) => (
          <Box className={clsx('control-stack-item', index === (data.length - 1) && noBottomBorder && 'no-bottom-border', item.type === StackTypeEnum.INFO && 'info')} key={item.id}>
            <Tooltip hasArrow label={item.name.length > 7 ? item.name : ''}>{item.type === StackTypeEnum.TITLE ? truncate(item.name) : item.name}</Tooltip>
          </Box>
        )) : <Box className={clsx('control-stack-item', 'control-stack-item-empty', noBottomBorder && 'no-bottom-border')}>Empty</Box>}
    </Box>
  )
}

export default StackBox;
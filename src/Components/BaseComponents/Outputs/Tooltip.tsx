import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';

export  const BasicTooltip=({ title }: { title: string })=> {
  return (
    <Tooltip title={title} placement="left" arrow>
        <HelpIcon color="primary" />
    </Tooltip>
  );
}
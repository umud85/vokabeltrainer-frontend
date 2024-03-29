'use client';

import React from 'react';
import {useAppSelector, useAppDispatch} from '@/hooks/reduxHooks';
import {setAmount} from '@/features/amount/amountSlice';
import {setDirection} from '@/features/direction/directionSlice';
import type {Direction} from '@/features/direction/directionSlice';

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  TextField,
} from '@mui/material';

export default function Settings() {
  const amount = useAppSelector((state) => state.amount.value);
  const direction = useAppSelector((state) => state.direction.value);
  const status = useAppSelector((state) => state.status.value);
  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
      }}
    >
      <FormControl>
        <InputLabel
          size="small"
          id={'direction-select-label'}
          htmlFor={'direction-select'}
        >
          Direction
        </InputLabel>
        <Select
          defaultValue="englishToGerman"
          labelId="direction-select-label"
          inputProps={{id: 'direction-select'}}
          value={direction}
          onChange={(e) => dispatch(setDirection(e.target.value as Direction))}
          label="Direction"
          sx={{width: '295px'}}
          size="small"
          disabled={status === 'on'}
        >
          <MenuItem value="englishToGerman">English To German</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="amount-input"
        label="Amount"
        type="number"
        variant="outlined"
        size="small"
        value={amount}
        onChange={(e) => dispatch(setAmount(e.target.value))}
        sx={{width: '120px'}}
        disabled={status === 'on'}
      />
    </Box>
  );
}

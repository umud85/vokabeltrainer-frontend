'use client';

import {useAppSelector} from '@/hooks/reduxHooks';

import {Box, Typography} from '@mui/material';

export default function ScoreBoard() {
  const status = useAppSelector((state) => state.status.value);
  const vocabularies = useAppSelector((state) => state.vocabularies.value);

  const baseValue =
    status === 'off' ? 0 : vocabularies?.filter((voc) => voc.step === 0).length;
  const step1Value =
    status === 'off' ? 0 : vocabularies?.filter((voc) => voc.step === 1).length;
  const step2Value =
    status === 'off' ? 0 : vocabularies?.filter((voc) => voc.step === 2).length;
  const doneValue =
    status === 'off' ? 0 : vocabularies?.filter((voc) => voc.step === 3).length;

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'var(--light-gray)',
        padding: '1.5rem 0',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <Typography
          component="h2"
          sx={{
            color: 'var(--secondary-color)',
            fontSize: '1rem',
            textTransform: 'uppercase',
          }}
        >
          Base
        </Typography>
        <Typography
          component="h3"
          sx={{
            color: 'var(--primary-color)',
            fontSize: '1.5rem',
            textAlign: 'center',
          }}
        >
          {baseValue}
        </Typography>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <Typography
          component="h2"
          sx={{
            color: 'var(--secondary-color)',
            fontSize: '1rem',
            textTransform: 'uppercase',
          }}
        >
          Step 1
        </Typography>
        <Typography
          component="h3"
          sx={{
            color: 'var(--primary-color)',
            fontSize: '1.5rem',
            textAlign: 'center',
          }}
        >
          {step1Value}
        </Typography>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <Typography
          component="h2"
          sx={{
            color: 'var(--secondary-color)',
            fontSize: '1rem',
            textTransform: 'uppercase',
          }}
        >
          Step 2
        </Typography>
        <Typography
          component="h3"
          sx={{
            color: 'var(--primary-color)',
            fontSize: '1.5rem',
            textAlign: 'center',
          }}
        >
          {step2Value}
        </Typography>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <Typography
          component="h2"
          sx={{
            color: 'var(--secondary-color)',
            fontSize: '1rem',
            textTransform: 'uppercase',
          }}
        >
          Done
        </Typography>
        <Typography
          component="h3"
          sx={{
            color: 'var(--primary-color)',
            fontSize: '1.5rem',
            textAlign: 'center',
          }}
        >
          {doneValue}
        </Typography>
      </Box>
    </Box>
  );
}

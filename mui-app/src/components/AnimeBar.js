import { Box, Stack, Divider, Typography, Button } from '@mui/material'

import React from 'react'
import EastRoundedIcon from '@mui/icons-material/EastRounded';

const AnimeBar = ({ animeData, pageData, setPage, page }) => {



  const handelRedirect = (urldata) => {
    window.open(urldata)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingBottom: '50px' }}>

      <Box component='div' mt={2.5} display='flex' justifyContent='space-between' sx={{ gap: { lg: '925px', md: '725px', sm: '525px', xs: '225px' } }}>

        <Button style={{ color: 'black', border: '2px solid black', opacity: pageData.current_page === 1 ? 0.4 : 1 }} disabled={pageData.current_page === 1 ? true : false} onClick={() => setPage(page - 1)}> Back </Button>
        <Button style={{ color: 'black', border: '2px solid black' }} onClick={() => setPage(page + 1)} disabled={pageData.has_next_page === false ? true : false}> Next </Button>

      </Box>
      {animeData && animeData.length ?
        (
          <>
            {
              animeData.map((data) => (

                <Stack direction='row' sx={{ border: '2px solid black', p: 1, mt: 7, width: '85%' }}>

                  <Box component='div' style={{ width: '90%' }}>
                    <Stack direction='row' spacing={4}>
                      <Box component='img' src={data?.images.jpg.image_url} height={100} width={80} />
                      <Box>
                        <Stack spacing={3}>
                          <Box display="flex" >
                            <Typography fontSize={22} fontWeight='bold'>{data.name}</Typography>
                          </Box>
                          <Box display='flex' gap={3} flexWrap='wrap' width='auto' >
                            {
                              data.nicknames.map((data) => (
                                <Box sx={{ background: 'grey', borderRadius: '4px', padding: '5px' }} >
                                  <Typography color='white'>{data}</Typography>
                                </Box>

                              ))

                            }
                          </Box>
                        </Stack>
                      </Box>
                    </Stack>
                  </Box>
                  <Divider sx={{ border: '1px solid black' }} orientation='vertical' flexItem />
                  <Box component='div'
                    style={{ width: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    onClick={() => handelRedirect(data.url)}
                  >
                    <EastRoundedIcon style={{ height: '45px', width: '45px' }} />
                  </Box>

                </Stack>


              ))
            }

            <Box component='div' mt={6} display='flex' justifyContent='space-between' sx={{ gap: { lg: '925px', md: '725px', sm: '525px', xs: '225px' } }}>

              <Button style={{ color: 'black', border: '2px solid black', opacity: pageData.current_page === 1 ? 0.4 : 1 }} disabled={pageData.current_page === 1 ? true : false} onClick={() => setPage(page - 1)}> Back </Button>
              <Button style={{ color: 'black', border: '2px solid black' }} onClick={() => setPage(page + 1)} disabled={pageData.has_next_page === false ? true : false}> Next </Button>

            </Box>
          </>
        )

        :

        (
          <Box component='div' style={{ marginTop: '50px' }}>
            <Typography sx={{ fontSize: '18px' }}> No Data Found!!!!</Typography>
          </Box>
        )

      }

    </div>
  )
}

export default AnimeBar

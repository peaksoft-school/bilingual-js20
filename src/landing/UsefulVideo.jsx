import React, { useState, useRef } from 'react';
import { 
  Box, Typography, Card, CardContent, Container, 
  Dialog, IconButton, Zoom, Fade 
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const videoData = [
  { id: 1, title: 'Test Overview', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: 2, title: 'Test Walkthrough', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
  { id: 3, title: 'Integrated Subscores', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
];

const formatDuration = (seconds) => {
  if (!seconds) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

const VideoCard = ({ video, onOpen }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [duration, setDuration] = useState(null);

  return (
    <Card 
      onClick={() => onOpen(video.videoUrl)}
      onMouseEnter={() => {
        setIsHovered(true);
        videoRef.current?.play().catch(() => {});
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        videoRef.current?.pause();
        if (videoRef.current) videoRef.current.currentTime = 0;
      }}
      sx={{ 
        width: 370, 
        minWidth: 370,
        height: 348,
        borderRadius: 5, 
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        overflow: 'hidden',
        '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 12px 30px rgba(0,0,0,0.12)' }
      }}
    >
      <Box sx={{ position: 'relative', height: 250, bgcolor: 'black' }}>
        <video
          ref={videoRef}
          src={video.videoUrl}
          muted
          loop
          playsInline
          onLoadedMetadata={() => setDuration(videoRef.current?.duration)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: isHovered ? 1 : 0.8 }}
        />
        <Fade in={!isHovered}>
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            bgcolor: 'white', borderRadius: '50%', width: 54, height: 54,
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <PlayArrowIcon sx={{ color: '#3F51B5', fontSize: 32 }} />
          </Box>
        </Fade>
      </Box>

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', px: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 800, color: '#3F51B5', mb: 0.5, lineHeight: 1.2 }}>
          {video.title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#888', fontWeight: 500 }}>
          Duration {duration ? formatDuration(duration) : '...'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <Box sx={{ bgcolor: '#fcf5e8', minHeight: '100vh', py: 10 }}>
      <Container maxWidth={false} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 900, color: '#3F51B5', mb: 6 }}>
          Useful videos
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'row',
          flexWrap: 'nowrap', 
          gap: 4, 
          justifyContent: 'center',
          width: '100%',
          overflowX: 'auto',
          pb: 2 
        }}>
          {videoData.map((video) => (
            <VideoCard key={video.id} video={video} onOpen={setSelectedVideo} />
          ))}
        </Box>
      </Container>

      <Dialog
        fullScreen
        open={Boolean(selectedVideo)}
        onClose={() => setSelectedVideo(null)}
        TransitionComponent={Zoom}
        PaperProps={{
          sx: {
            bgcolor: 'black',
            color: 'white'
          }
        }}
      >
        <Box sx={{ 
          position: 'relative', 
          width: '100vw', 
          height: '100vh', 
          bgcolor: 'black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <IconButton
            onClick={() => setSelectedVideo(null)}
            sx={{ 
              position: 'absolute', 
              top: 20, 
              right: 20, 
              color: 'white', 
              zIndex: 10,
              bgcolor: 'rgba(255,255,255,0.1)',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' }
            }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
          
          {selectedVideo && (
            <video 
              src={selectedVideo} 
              controls 
              autoPlay 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'contain' // Видео растянется максимально, сохраняя пропорции
              }} 
            />
          )}
        </Box>
      </Dialog>
    </Box>
  );
}
const TikTokEmbed: React.FC = () => {
  return (
    <div style={{ maxHeight: '510px' }}>
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@strangemikesounds/video/7166627493573561605"
        data-video-id="7166627493573561605"
        style={{
          width: '320px',
          maxHeight: '570px',
          borderRadius: '12px',
          transform: 'scale(0.9) translateY(-45px)',
        }}
      >
        {' '}
        <section>
          {' '}
          <a
            target="_blank"
            title="@strangemikesounds"
            href="https://www.tiktok.com/@strangemikesounds?refer=embed"
            rel="noreferrer"
          >
            @strangemikesounds
          </a>{' '}
          O timbre que chocou o mundo!{' '}
          <a
            title="viral"
            target="_blank"
            href="https://www.tiktok.com/tag/viral?refer=embed"
            rel="noreferrer"
          >
            #viral
          </a>{' '}
          <a
            title="soundesign"
            target="_blank"
            href="https://www.tiktok.com/tag/soundesign?refer=embed"
            rel="noreferrer"
          >
            #soundesign
          </a>{' '}
          <a
            title="musictok"
            target="_blank"
            href="https://www.tiktok.com/tag/musictok?refer=embed"
            rel="noreferrer"
          >
            #musictok
          </a>{' '}
          <a
            target="_blank"
            title="♬ Move Your Body - Öwnboss &#38; Sevek"
            href="https://www.tiktok.com/music/Move-Your-Body-7023303703923591169?refer=embed"
            rel="noreferrer"
          >
            ♬ Move Your Body - Öwnboss &#38; Sevek
          </a>{' '}
        </section>{' '}
      </blockquote>{' '}
      <script async src="https://www.tiktok.com/embed.js"></script>
    </div>
  );
};

export default TikTokEmbed;

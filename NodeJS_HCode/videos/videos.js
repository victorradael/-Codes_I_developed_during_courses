const { spawn } = require('child_process');

const parent = process.argv[2];
let videos = [];

if(process.argv[2]){
    const start = parseInt(process.argv[3])
    const end = parseInt(process.argv[4])

    for (let i = start; i < end; i++) {
        videos.push(i);
    };
    videos.reverse();
    processo();
} else {
    console.log(`É necessário criar um dir de nivel superior`)
}

function resize(video, quality) {
    const prom = Promise((response, reject) => {
        const ffmpeg = spawn('./ffmpeg/bin/ffmpeg', [
            '-i',
            `${parent}/${video}.mp4`,
            '-codec:v',
            'libx264',
            '-profile:v',
            'main',
            '-preset',
            'slow',
            '-b:v',
            '400k',
            '-maxrate',
            '400k',
            '-bufsize',
            '800k',
            '-vf',
            `scale=-2:${quality}`,
            '-threads',
            '0',
            '-b:a',
            '128k',
            `${parent}/resultado/${video}-${quality}.mp4`
        ], {shell: "powershell"})
        ffmpeg.stderr.on('data', data => {
            console.log(data)
        });

        ffmpeg.on('close', code => {
            response(`Programa em segundo plano fechado com código:${code}`)
        });
    });
    return prom
}

async function processo() {
    let video = videos.pop()
    if(video){
        try {
            await resize(video, 720);
            await resize(video, 480);
            await resize(video, 360);

            console.log(`Video Resized - ${video}`)
        } catch (error) {
            console.log(`Deu ERRO: ${error}`)
        }
    }

}
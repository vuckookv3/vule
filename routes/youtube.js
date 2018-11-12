const express = require('express');
const router = express.Router();
const { exec } = require('child_process');
const { join } = require('path');
const output = join(__dirname, '../public/uploads/');
const fs = require('fs');

router.get('/youtube', async (req, res) => {

})

router.get('/test/:id', async (req, res) => {
    const id = req.params.id;
    const yt = `https://www.youtube.com/watch?v=${id}`
    const name = `${id}.mp3`
    const cmdFileName = `youtube-dl --get-title ${yt}`
    const cmd = `youtube-dl --extract-audio --audio-format mp3 --output ${output + id}.%(ext)s ${yt}`
    exec(cmdFileName, (error, stdout, stderr) => {
        if (error) return res.render('error', { error, message: 'Greska' })
        const fileName = stdout.slice(0, stdout.length - 1) + '.mp3';
        exec(cmd, (err, stdout, stderr) => {

            res.download(`${output + name}`, `${fileName}`)
            res.on('finish', () => {
                fs.unlink(`${output + name}`, (err) => {
                    if (err) console.error(err)
                })
            })
        })

    })
})

module.exports = router;
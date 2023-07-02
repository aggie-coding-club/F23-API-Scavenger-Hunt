export default function handler(req, res) {
    res.status(200).json({ text: '\nWrong endpoint buddy...\n\nIf you are lost, please let an Officer know\n' });
}
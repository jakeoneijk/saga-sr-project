export const paperContent = {
  title:
    'FlashSR: One-step Versatile Audio Super-resolution via Diffusion Distillation',
  paperInfo:
    'Proceedings of the IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2025',
  author: 'Jaekwon Im, Juhan Nam',
  affiliation:
    'Graduate School of Culture Technology, KAIST, Republic of Korea',
  abstract:
    'Versatile audio super-resolution (SR) is the challenging task of restoring high-frequency components from low-resolution audio with sampling rates between 4kHz and 32kHz in various domains such as music, speech, and sound effects. Previous diffusion-based SR methods suffer from slow inference due to the need for a large number of sampling steps. In this paper, we introduce FlashSR, a single-step diffusion model for versatile audio super-resolution aimed at producing 48kHz audio. FlashSR achieves fast inference by utilizing diffusion distillation with three objectives: distillation loss, adversarial loss, and distribution-matching distillation loss. We further enhance performance by proposing the SR Vocoder, which is specifically designed for SR models operating on mel-spectrograms. FlashSR demonstrates competitive performance with the current state-of-the-art model in both objective and subjective evaluations while being approximately 22 times faster.',
  reference: [
    'H. Liu, W. Choi, X. Liu, Q. Kong, Q. Tian, and D. Wang, “Neural vocoder is all you need for speech superresolution,” in INTERSPEECH, p. 4227–4231, 2022',
    'H. Liu, K. Chen, Q. Tian, W. Wang, and M. D. Plumbley, “Audiosr: Versatile audio super-resolution at scale,” in ICASSP, pp. 1076–1080, IEEE, 2024.',
  ],
  contactLink: 'https://jakeoneijk.github.io/',
  paperLink: 'https://arxiv.org/abs/2501.10807',
  codeLink: 'https://github.com/jakeoneijk/FlashSR_Inference',
}

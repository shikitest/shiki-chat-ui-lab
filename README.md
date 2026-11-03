# Shiki chat UI lab

Independent comparison of Framework7, ChatScope React, and a browser-local adaptation of gong-cha/line-clone's conversation layout. Uses only synthetic test data. Does not read or migrate the existing Shiki project databases.

Build: `pnpm install && pnpm build`. The build generates `dist/` and the tracked `docs/` static preview. GitHub Pages serves main branch `/docs`.

Each demo supports local text sending, simulated replies and import of a `customReplies` JSON array (up to 10,000 strings). Disabled groups are excluded. Simulation does not reproduce the production Shiki reply probability. Storage prefix: `SHIKI_UI_LAB_v1_`, one key per demo.

Framework7 uses its actual core router, swipe-back, dialog and messages components. ChatScope uses its actual React MessageList and MessageInput. The LINE clone demo preserves the upstream's basic layout only; PHP/MySQL/login/SSE are not run or represented as working. No original Shiki cards, personal media, credentials or production code were copied.

Not yet integrated: stable friend identity, production reply runtime, existing backups, image/sticker libraries, audio keepalive, activity invitations. This is an evaluation repository, not a replacement for the production website.

# First evaluation

All three demos passed a 390×844 Chromium browser check: import a synthetic card, send a message, receive that exact card, reload and find the stored message; no page errors or horizontal overflow. Screenshots retained locally in ignored outputs/. This does not establish real iPhone keyboard behavior or interactive swipe quality.

Framework7 provides actual mobile routing, swipe-back and dialog/message primitives. Its current iOS defaults use translucent controls and do not match LINE; additional CSS and layout work remains. Best candidate for an isolated interaction prototype.

ChatScope provides the actual React chat components. It does not solve overall mobile routing or edge-swipe navigation by itself. Integration into the production vanilla JS project would require a React boundary or frontend migration.

gong-cha/line-clone has a simple PHP/MySQL conversation page. The adapted page demonstrates that original layout, with local simulation replacing backend behavior. Its visual and interaction completeness is lower than the requested LINE recording, so replacing the production project with it would not advance the target experience.

Production integration is NOT complete. Import here is a small lab-only customReplies adapter and uses different storage. Production probabilities, friend identities, attachments and backups remain untouched.

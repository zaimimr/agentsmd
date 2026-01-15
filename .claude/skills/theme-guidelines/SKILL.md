# AgentsMD Theme Guidelines

## Color Palette
Use these exact hex colors for all styling:

- **Text/Foreground**: `#FFFCB6` (Gul - Light yellow)
- **Background**: `#272D2A` (Grå - Dark gray)
- **Primary/Accent**: `#0000FF` (Blå - Bright blue)

## Implementation
- Update Tailwind config (`tailwind.config.ts`) with hex colors
- Update CSS variables (`app/globals.css`) with hex values
- Apply to all component styling and UI updates
- Use hex format everywhere, not HSL or other formats

## Logo
- Design: Yellow ellipse ring around text
- Text: "BLANK.MD"
- Colors: Yellow text (`#FFFCB6`) on dark background (`#272D2A`)
- Location: `app/layout.tsx` (SVG component)

## When to Apply
- New components: Use theme colors immediately
- Existing components: Update to match color scheme
- API/data changes: Don't affect theme—maintain consistency
- Never hardcode colors: Reference CSS variables or Tailwind theme

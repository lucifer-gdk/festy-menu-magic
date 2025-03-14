
# Shinchan's The Chill Spot - College Fest Menu Website

A playful and colorful menu website for your college fest stall, featuring a Shinchan theme.

## Project info

**URL**: https://lovable.dev/projects/313a5059-582a-41b4-b13c-f16792d8739a

## Customization

### Adding Images

1. Add character images to `/public/characters/`
2. Add milkshake images to `/public/milkshakes/`
3. Add special menu item images to `/public/specials/`
4. Add combo images to `/public/combos/`

### Modifying Menu Items

1. Open `src/data/menuData.ts`
2. Edit the array of menu items to add, remove or modify items
3. Make sure each item has the following properties:
   - id
   - name
   - price
   - image (path to image starting with /)
   - category ('milkshakes', 'specials', or 'combos')
   - description (optional)

### Updating Contact Information

1. Open `src/data/menuData.ts`
2. Edit the `contactInfo` object with your actual contact numbers

## How to use this website

1. Display this website on a tablet/laptop at your college fest stall
2. You can print out QR codes linking to this website for easier access
3. Share the link on your social media channels to promote your stall

## How to customize the design

1. To change colors, edit the `tailwind.config.ts` file
2. To modify animations or styles, edit the `src/index.css` file
3. To change the layout or structure, edit the components in `src/components/`

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- shadcn-ui components


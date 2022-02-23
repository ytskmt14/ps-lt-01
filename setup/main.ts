import { defineAppSetup } from '@slidev/types';
import VToolTip from 'v-tooltip';

export default defineAppSetup(({ app }) => {
    app.use(VToolTip);
})

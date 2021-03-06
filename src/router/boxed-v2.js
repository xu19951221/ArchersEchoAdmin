import BoxedLayout from 'Container/BoxedV2';

// dashboard components
const Ecommerce = () => import('Views/dashboard/Ecommerce');
const WebAnalytics = () => import('Views/dashboard/WebAnalytics');
const Magazine = () => import('Views/dashboard/Magazine');
const News = () => import('Views/dashboard/News');
const Agency = () => import('Views/dashboard/Agency');
const Saas = () => import('Views/dashboard/Saas');

// Widgets component
const ChartWidgets = () => import('Views/widgets/chart-widgets/ChartWidgets');
const UserWidgets = () => import('Views/widgets/user-widgets/UserWidgets');

//Ecommerce Widgets
const Shop = () => import('Views/ecommerce/Shop');
const Cart = () => import('Views/ecommerce/Cart');
const Checkout = () => import('Views/ecommerce/Checkout');
const CreditCard = () => import('Views/ecommerce/CreditCard');

// Inbox component
const Inbox = () => import('Views/inbox/Inbox');

// chat component
const Chat = () => import('Views/chat/Chat');

// calendar components
const Calendar = () => import('Views/calendar/Calendar');

// ui components
const Buttons = () => import('Views/ui-elements/Buttons');
const Cards = () => import('Views/ui-elements/Cards');
const Grid = () => import('Views/ui-elements/Grid');
const List = () => import('Views/ui-elements/List');
const Menu = () => import('Views/ui-elements/Menu');
const Slider = () => import('Views/ui-elements/Slider');
const Snackbar = () => import('Views/ui-elements/Snackbar');
const Tooltip = () => import('Views/ui-elements/Tooltip');
const Dialog = () => import('Views/ui-elements/Dialog');
const Select = () => import('Views/ui-elements/Select');
const Input = () => import('Views/ui-elements/Input');
const Checkbox = () => import('Views/ui-elements/Checkbox');
const Radio = () => import('Views/ui-elements/Radio');
const Toolbar = () => import('Views/ui-elements/Toolbar');
const Progress = () => import('Views/ui-elements/Progress');
const Tabs = () => import('Views/ui-elements/Tabs');
const Carousel = () => import('Views/ui-elements/Carousel');
const Chips = () => import('Views/ui-elements/Chips');
const Datepicker = () => import('Views/ui-elements/Datepicker');
const Timepicker = () => import('Views/ui-elements/Timepicker');

// chart components
const VueChartjs = () => import('Views/charts/VueChartjs');
const VueEcharts = () => import('Views/charts/VueEcharts');

// maps views
const GoogleMaps = () => import('Views/maps/GoogleMaps');
const LeafletMaps = () => import('Views/maps/LeafletMaps');
const JvectorMap = () => import('Views/maps/JvectorMap');

// Pages views
const Blank = () => import('Views/pages/Blank');
const Blog = () => import('Views/pages/Blog');
const Gallery = () => import('Views/pages/Gallery');
const Pricing1 = () => import('Views/pages/Pricing-1');
const Pricing2 = () => import('Views/pages/Pricing-2');

// users views
const UserProfile = () => import('Views/users/UserProfile');
const UsersList = () => import('Views/users/UsersList');

// drag-drop components
const Vue2Dragula = () => import('Views/drag-drop/Vue2Dragula');
const VueDraggable = () => import('Views/drag-drop/Vuedraggable');
const VueDraggableResizeable = () => import('Views/drag-drop/VueDraggableResizable');

// icons components
const Themify = () => import('Views/icons/Themify');
const Material = () => import('Views/icons/Material');

// editor components
const QuillEditor = () => import('Views/editor/QuillEditor');
const WYSIWYG = () => import('Views/editor/WYSIWYG');

// form componenets
const FormValidation = () => import('Views/forms/FormValidation');
const Stepper = () => import('Views/forms/Stepper');

// Data table componenets
const Standard = () => import('Views/tables/Standard');
const Slots = () => import('Views/tables/Slots');
const SelectableRows = () => import('Views/tables/SelectableRows');
const SearchWithText = () => import('Views/tables/SearchWithText');

// Extensions components
const ImageCropper = () => import('Views/extensions/ImageCropper');
const VideoPlayer = () => import('Views/extensions/VideoPlayer');
const Dropzone = () => import('Views/extensions/Dropzone');

export default {
   path: '/boxed-v2',
   component: BoxedLayout,
   redirect: '/boxed-v2/dashboard/ecommerce',
   children: [
      {
         component: Ecommerce,
         path: '/boxed-v2/dashboard/ecommerce',
         meta: {
            requiresAuth: true,
            title: 'message.ecommerce',
            breadcrumb: 'Dashboard / Ecommerce'
         }
      },
      {
         component: WebAnalytics,
         path: '/boxed-v2/dashboard/web-analytics',
         meta: {
            requiresAuth: true,
            title: 'message.webAnalytics',
            breadcrumb: 'Dashboard / Web Analytics'
         }
      },
      {
         component: Magazine,
         path: '/boxed-v2/dashboard/magazine',
         meta: {
            requiresAuth: true,
            title: 'message.magazineAndNews',
            breadcrumb: 'Dashboard / Magazine'
         }
      },
      {
         component: News,
         path: '/boxed-v2/dashboard/news',
         meta: {
            requiresAuth: true,
            title: 'message.news',
            breadcrumb: 'Dashboard / News'
         }
      },
      {
         component: Agency,
         path: '/boxed-v2/dashboard/agency',
         meta: {
            requiresAuth: true,
            title: 'message.agency',
            breadcrumb: 'Dashboard / Agency'
         }
      },
      {
         component: Saas,
         path: '/boxed-v2/dashboard/saas',
         meta: {
            requiresAuth: true,
            title: 'message.saas',
            breadcrumb: 'Dashboard / SAAS'
         }
      },
      {
         path: '/boxed-v2/widgets/user-widgets',
         component: UserWidgets,
         meta: {
            requiresAuth: true,
            title: 'message.user',
            breadcrumb: 'Widgets / User'
         }
      },
      {
         path: '/boxed-v2/widgets/chart-widgets',
         component: ChartWidgets,
         meta: {
            requiresAuth: true,
            title: 'message.charts',
            breadcrumb: 'Widgets / Charts'
         }
      },
      {
         path: '/boxed-v2/ecommerce/shop',
         component: Shop,
         meta: {
            requiresAuth: true,
            title: 'message.shop',
            breadcrumb: 'Ecommerce / Shop'
         }
      },
      {
         path: '/boxed-v2/ecommerce/cart',
         component: Cart,
         meta: {
            requiresAuth: true,
            title: 'message.cart',
            breadcrumb: 'Ecommerce / Cart'
         }
      },
      {
         path: '/boxed-v2/ecommerce/checkout',
         component: Checkout,
         meta: {
            requiresAuth: true,
            title: 'message.checkout',
            breadcrumb: 'Ecommerce / Checkout'
         }
      },
      {
         path: '/boxed-v2/ecommerce/cards',
         component: CreditCard,
         meta: {
            requiresAuth: true,
            title: 'message.cards',
            breadcrumb: 'Ecommerce / Cards'
         }
      },
      {
         path: '/boxed-v2/pages/blog',
         component: Blog,
         meta: {
            requiresAuth: true,
            title: 'message.blog',
            breadcrumb: 'Pages / Blog'
         }
      },
      {
         component: Gallery,
         path: '/boxed-v2/pages/gallery',
         meta: {
            requiresAuth: true,
            title: 'message.gallery',
            breadcrumb: 'Pages / Gallery'
         }
      },
      {
         component: Pricing1,
         path: '/boxed-v2/pages/pricing-1',
         meta: {
            requiresAuth: true,
            title: 'message.pricing1',
            breadcrumb: 'Pages / Pricing-1'
         }
      },
      {
         component: Pricing2,
         path: '/boxed-v2/pages/pricing-2',
         meta: {
            requiresAuth: true,
            title: 'message.pricing2',
            breadcrumb: 'Pages / Pricing-2'
         }
      },
      {
         component: Blank,
         path: '/boxed-v2/pages/blank',
         meta: {
            requiresAuth: true,
            title: 'message.blank',
            breadcrumb: 'Pages / Blank'
         }
      },
      {
         component: Inbox,
         path: '/boxed-v2/inbox',
         meta: {
            requiresAuth: true,
            title: 'message.inbox',
            breadcrumb: 'Modules / Inbox'
         }
      },
      {
         component: Chat,
         path: '/boxed-v2/chat',
         meta: {
            requiresAuth: true,
            title: 'message.chat',
            breadcrumb: 'Modules / Chat'
         }
      },
      {
         component: Buttons,
         path: '/boxed-v2/ui-elements/buttons',
         meta: {
            requiresAuth: true,
            title: 'message.buttons',
            breadcrumb: 'UI Elements / Button'
         }
      },
      {
         component: Cards,
         path: '/boxed-v2/ui-elements/cards',
         meta: {
            requiresAuth: true,
            title: 'message.cards',
            breadcrumb: 'UI Elements / Cards'
         }
      },
      {
         component: Checkbox,
         path: '/boxed-v2/ui-elements/checkbox',
         meta: {
            requiresAuth: true,
            title: 'message.checkbox',
            breadcrumb: 'UI Elements / Checkbox'
         }
      },
      {
         component: Carousel,
         path: '/boxed-v2/ui-elements/carousel',
         meta: {
            requiresAuth: true,
            title: 'message.carousel',
            breadcrumb: 'UI Elements / Carousel'
         }
      },
      {
         component: Chips,
         path: '/boxed-v2/ui-elements/chips',
         meta: {
            requiresAuth: true,
            title: 'message.chips',
            breadcrumb: 'UI Elements / Chips'
         }
      },
      {
         component: Datepicker,
         path: '/boxed-v2/ui-elements/datepicker',
         meta: {
            requiresAuth: true,
            title: 'message.datepicker',
            breadcrumb: 'UI Elements / Datepicker'
         }
      },
      {
         component: Dialog,
         path: '/boxed-v2/ui-elements/dialog',
         meta: {
            requiresAuth: true,
            title: 'message.dialog',
            breadcrumb: 'UI Elements / Dialog'
         }
      },
      {
         component: Grid,
         path: '/boxed-v2/ui-elements/grid',
         meta: {
            requiresAuth: true,
            title: 'message.grid',
            breadcrumb: 'UI Elements / Grid'
         }
      },
      {
         component: Input,
         path: '/boxed-v2/ui-elements/input',
         meta: {
            requiresAuth: true,
            title: 'message.input',
            breadcrumb: 'UI Elements / Input'
         }
      },
      {
         component: List,
         path: '/boxed-v2/ui-elements/list',
         meta: {
            requiresAuth: true,
            title: 'message.list',
            breadcrumb: 'UI Elements / List'
         }
      },
      {
         component: Menu,
         path: '/boxed-v2/ui-elements/menu',
         meta: {
            requiresAuth: true,
            title: 'message.menu',
            breadcrumb: 'UI Elements / Menu'
         }
      },
      {
         component: Progress,
         path: '/boxed-v2/ui-elements/progress',
         meta: {
            requiresAuth: true,
            title: 'message.progress',
            breadcrumb: 'UI Elements / Progress'
         }
      },
      {
         component: Radio,
         path: '/boxed-v2/ui-elements/radio',
         meta: {
            requiresAuth: true,
            title: 'message.radio',
            breadcrumb: 'UI Elements / Radio'
         }
      },
      {
         component: Select,
         path: '/boxed-v2/ui-elements/select',
         meta: {
            requiresAuth: true,
            title: 'message.select',
            breadcrumb: 'UI Elements / Select'
         }
      },
      {
         component: Slider,
         path: '/boxed-v2/ui-elements/slider',
         meta: {
            requiresAuth: true,
            title: 'message.slider',
            breadcrumb: 'UI Elements / Slider'
         }
      },
      {
         component: Snackbar,
         path: '/boxed-v2/ui-elements/snackbar',
         meta: {
            requiresAuth: true,
            title: 'message.snackbar',
            breadcrumb: 'UI Elements / Snackbar'
         }
      },
      {
         component: Tabs,
         path: '/boxed-v2/ui-elements/tabs',
         meta: {
            requiresAuth: true,
            title: 'message.tabs',
            breadcrumb: 'UI Elements / Tabs'
         }
      },
      {
         component: Toolbar,
         path: '/boxed-v2/ui-elements/toolbar',
         meta: {
            requiresAuth: true,
            title: 'message.toolbar',
            breadcrumb: 'UI Elements / Toolbar'
         }
      },
      {
         component: Tooltip,
         path: '/boxed-v2/ui-elements/tooltip',
         meta: {
            requiresAuth: true,
            title: 'message.tooltip',
            breadcrumb: 'UI Elements / Tooltip'
         }
      },
      {
         component: Timepicker,
         path: '/boxed-v2/ui-elements/timepicker',
         meta: {
            requiresAuth: true,
            title: 'message.timepicker',
            breadcrumb: 'UI Elements / Timepicker'
         }
      },
      {
         component: FormValidation,
         path: '/boxed-v2/forms/form-validation',
         meta: {
            requiresAuth: true,
            title: 'message.formValidation',
            breadcrumb: 'Forms / FormValidation'
         }
      },
      {
         component: Stepper,
         path: '/boxed-v2/forms/stepper',
         meta: {
            requiresAuth: true,
            title: 'message.stepper',
            breadcrumb: 'Forms / Stepper'
         }
      },
      {
         component: VueChartjs,
         path: '/boxed-v2/charts/vue-chartjs',
         meta: {
            requiresAuth: true,
            title: 'message.vueChartjs',
            breadcrumb: 'Charts / Vue Chartjs'
         }
      },
      {
         component: VueEcharts,
         path: '/boxed-v2/charts/vue-echarts',
         meta: {
            requiresAuth: true,
            title: 'message.vueEcharts',
            breadcrumb: 'Charts / Vue Echarts'
         }
      },
      {
         component: Themify,
         path: '/boxed-v2/icons/themify',
         meta: {
            requiresAuth: true,
            title: 'message.themify',
            breadcrumb: 'Icons / Themify'
         }
      },
      {
         component: Material,
         path: '/boxed-v2/icons/material',
         meta: {
            requiresAuth: true,
            title: 'message.material',
            breadcrumb: 'Icons / Material'
         }
      },
      {
         component: Standard,
         path: '/boxed-v2/tables/standard',
         meta: {
            requiresAuth: true,
            title: 'message.standard',
            breadcrumb: 'Tables / Standard'
         }
      },
      {
         component: Slots,
         path: '/boxed-v2/tables/slots',
         meta: {
            requiresAuth: true,
            title: 'message.slots',
            breadcrumb: 'Tables / Slots'
         }
      },
      {
         component: SelectableRows,
         path: '/boxed-v2/tables/selectablerows',
         meta: {
            requiresAuth: true,
            title: 'message.selectable',
            breadcrumb: 'Tables / Selectable Rows'
         }
      },
      {
         component: SearchWithText,
         path: '/boxed-v2/tables/searchwithtext',
         meta: {
            requiresAuth: true,
            title: 'message.searchRow',
            breadcrumb: 'Tables / Search Row'
         }
      },
      {
         component: GoogleMaps,
         path: '/boxed-v2/maps/google-maps',
         meta: {
            requiresAuth: true,
            title: 'message.googleMaps',
            breadcrumb: 'Maps / Google Maps'
         }
      },
      {
         component: LeafletMaps,
         path: '/boxed-v2/maps/leaflet-maps',
         meta: {
            requiresAuth: true,
            title: 'message.leafletMaps',
            breadcrumb: 'Maps / Leaflet Maps'
         }
      },
      {
         component: JvectorMap,
         path: '/boxed-v2/maps/jvector-map',
         meta: {
            requiresAuth: true,
            title: 'message.jvectorMap',
            breadcrumb: 'Maps / JVector Map'
         }
      },
      {
         component: UserProfile,
         path: '/boxed-v2/users/user-profile',
         meta: {
            requiresAuth: true,
            title: 'message.userProfile',
            breadcrumb: 'Users / User Profile'
         }
      },
      {
         component: UsersList,
         path: '/boxed-v2/users/users-list',
         meta: {
            requiresAuth: true,
            title: 'message.usersList',
            breadcrumb: 'Users / Users List'
         }
      },
      {
         component: Calendar,
         path: '/boxed-v2/calendar',
         meta: {
            requiresAuth: true,
            title: 'message.calendar',
            breadcrumb: 'Calendar'
         }
      },
      {
         component: QuillEditor,
         path: '/boxed-v2/editor/quilleditor',
         meta: {
            requiresAuth: true,
            title: 'message.quillEditor',
            breadcrumb: 'Editor / Quill Editor'
         }
      },
      {
         component: WYSIWYG,
         path: '/boxed-v2/editor/wysiwyg',
         meta: {
            requiresAuth: true,
            title: 'message.wYSIWYG',
            breadcrumb: 'Editor / WYSIWYG'
         }
      },
      {
         component: Vue2Dragula,
         path: '/boxed-v2/drag-drop/vue2dragula',
         meta: {
            requiresAuth: true,
            title: 'message.vue2Dragula',
            breadcrumb: 'Drag And Drop / Vue2 Dragula'
         }
      },
      {
         component: VueDraggable,
         path: '/boxed-v2/drag-drop/vuedraggable',
         meta: {
            requiresAuth: true,
            title: 'message.vueDraggable',
            breadcrumb: 'Drag And Drop / Vue Draggable'
         }
      },
      {
         component: VueDraggableResizeable,
         path: '/boxed-v2/drag-drop/vuedraggableresizeable',
         meta: {
            requiresAuth: true,
            title: 'message.draggableResizeable',
            breadcrumb: 'Drag And Drop / Draggable Resizeable'
         }
      },
      {
         path: '/boxed-v2/image-cropper',
         component: ImageCropper,
         meta: {
            requiresAuth: true,
            title: 'message.imageCropper',
            breadcrumb: 'Extensions / Image Cropper'
         }
      },
      {
         path: '/boxed-v2/video-player',
         component: VideoPlayer,
         meta: {
            requiresAuth: true,
            title: 'message.videoPlayer',
            breadcrumb: 'Extensions / Video Player'
         }
      },
      {
         path: '/boxed-v2/dropzone',
         component: Dropzone,
         meta: {
            requiresAuth: true,
            title: 'message.dropzone',
            breadcrumb: 'Extensions / Dropzone'
         }
      }
   ]
}

window.SONDA_CORE_API_ROOT = "https://sondacoreapi-noti-dev.azurewebsites.net/";
window.SONDA_CORE_NOTIFICATIONS_SERVICES_VERSION = "v1";
window.SONDA_CORE_USUARIOS_SERVICES = window.SONDA_CORE_API_ROOT + "Sonda.Core.Usuarios.Api";
window.SONDA_CORE_LOGIN_SERVICES = "http://10.165.202.31:82/apilogin6";
window.SONDA_CORE_CONFIGURATION_PUBLIC =
	window.SONDA_CORE_API_ROOT + "Sonda.Api.Configuration/api/v1/ConfigurationManager/GetAppSettings";
window.SONDA_CORE_CONFIGURATION_PRIVATE =
	window.SONDA_CORE_API_ROOT +
	"Sonda.Api.Configuration/api/v1/ConfigurationManager/GetAllAppSettings";
window.SONDA_CORE_NOTIFICATIONS_SERVICES =
	window.SONDA_CORE_API_ROOT + "Sonda.Core.Notificaciones.Api";
window.SONDA_API_USUARIO_SERVICES = "http://10.165.202.31:82/apilogin6";
window.SONDA_CORE_USUARIOS_SERVICES_VERSION = "v2";
window.SONDA_CORE_CONFIGURATION_PUBLIC =
	"https://sondacoreapi-dev.azurewebsites.net/Sonda.Api.Configuration/api/v1/ConfigurationManager/GetAppSettings";
window.SONDA_CORE_EXAMPLE_SERVICES = "https://sondacoreapi-dev.azurewebsites.net/Web.API.Example";
window.SONDA_CORE_EXAMPLE_SERVICES_VERSION = "v2";
window.SONDA_CORE_LOGOTEXT = "App Referencia";
window.SONDA_CORE_LOGIN_SERVICES_VERSION = "v2";
window.SONDA_IDADM = 1;
window.SONDA_NET_URL = "https://sondacoreapi-dev.azurewebsites.net/SondaNetSampleApp/";
window.BASENAME = "/portal/";
window.SONDA_CORE_BACKGROUNDTASKS_HANGFIRE = "https://localhost:44352/hangfire";
window.SONDA_CORE_BACKGROUNDTASKS_API = "https://localhost:44352";
window.TOKEN_SECRET = "palabra-secreta";

// menu
window.SONDA_CORE_MODULES = [
	{
		name: "proyecto-base-react",
		hash: window.BASENAME + "proyecto-base-react",
		appURL: "@afp/proyecto-base-react",
		storeURL: "@afp/store-proyecto-base-react",
	},
];

window.SONDA_CORE_MENU = [
	{
		icon: ["fas", "bell"],
		path: "/proyecto-base-react",
		title: "proyecto-base-react",
	},
];

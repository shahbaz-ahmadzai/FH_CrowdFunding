"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const config_1 = require("./config");
const routes_1 = require("./routes");
const swagger_json_1 = __importDefault(require("./utils/swagger.json"));
const swagger_ui_express_1 = require("swagger-ui-express");
const app = (0, express_1.default)();
app.use('/api-docs', swagger_ui_express_1.serve, (0, swagger_ui_express_1.setup)(swagger_json_1.default));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', routes_1.routes.router);
app.listen(config_1.config.port, () => { console.log(`Crowd Funding CORS server listening on port ${config_1.config.port}`); });
//# sourceMappingURL=app.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const updateUser = (username_1, _a) => __awaiter(void 0, [username_1, _a], void 0, function* (username, { firstname }) {
    try {
        const response = yield prisma.user.update({
            where: {
                username
            },
            data: {
                firstname,
            }
        });
        console.log(response);
    }
    catch (err) {
        console.error(err.message);
    }
});
updateUser("yuvraj@gmail.com", {
    firstname: "Signham"
});

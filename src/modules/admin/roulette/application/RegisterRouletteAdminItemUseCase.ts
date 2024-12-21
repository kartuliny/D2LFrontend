import { RouletteAdminItem } from "../domain/models/RouletteAdminItem";
import { ApiRouletteAdminRepository } from "../infrastructure/respositories/ApiRouletteAdminRepository";

export class RegisterRouletteAdminItemUseCase {
    constructor() { }
    
    static async invoke(params: RouletteAdminItem): Promise<void> {
        const repository = new ApiRouletteAdminRepository();
        await repository.createItem(params);
    }
}
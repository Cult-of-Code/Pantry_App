class InstructionsController < ApplicationController
    def index
        instructions = Instruction.all
        render json: instructions
    end
    
    def update 
        instruction = Instruction.find(params[:id])
        instruction.update_attributes(instruction_params)
        render json: instruction
    end
    
    def destroy
        Instruction.destroy(params[:id])
    end
    
    def create
         instruction = Instruction.create(instruction_params)
        if instruction.valid?
        render json: instruction
        else
        render json: instruction.errors, status: :unprocessable_entity
        end
    end
    
    
    def show
        instruction = Instruction.find(params[:id])
        render json: instruction
    end
    
    private
    
        def instruction_params
            params.require(:instruction).permit(:step)
        end

    
end

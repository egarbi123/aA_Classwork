class SubsController < ApplicationController

    before_action :require_moderator, only: [:edit]

    def index
        @subs = Sub.all
        render :index
    end

    def show
        @sub = Sub.find(params[:id])
        render :show
    end

    def create
        @sub = Sub.new(sub_params)
        @sub.moderator_id = current_user.id
        if @sub.save
            redirect_to sub_url(@sub)
        else
            flash[:errors] = @sub.errors.full_messages
            render :new
        end
    end

    def new
        @sub = Sub.new
        render :new
    end

    def edit
        @sub = Sub.find(params[:id])
        if @sub
            render :edit
        else
            redirect_to subs_url
        end    
    end

    
    def update
        @sub = Sub.find(params[:id])
        if @sub
            @sub.update_attributes(sub_params)
            redirect_to sub_url(@sub)
        else
            flash.now[:errors] = @sub.errors.full_messages
            render :edit
        end
    end

    
    
    private

    def require_moderator
        sub = Sub.find(params[:id])
        redirect_to subs_url unless current_user.id == sub.moderator_id
    end

    def sub_params
        params.require(:sub).permit(:title, :description)
    end
end

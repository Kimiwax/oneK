
import {AsyncPipe} from '@angular/common';
import type {TemplateRef} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import type {TuiDialogContext} from '@taiga-ui/core';
import {TuiButton, TuiDialogService, TuiTextfield} from '@taiga-ui/core';
import {TuiDataListWrapper, TuiSlider} from '@taiga-ui/kit';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {injectContext} from '@taiga-ui/polymorpheus';
import { GuardarVarsService } from '../../../services/guardar-vars.service';


@Component({
  selector: 'app-dialog-user',
  imports: [
    TuiButton,
    TuiInputModule,
    TuiTextfieldControllerModule,
  FormsModule],
  templateUrl: './dialog-user.component.html',
  styleUrl: './dialog-user.component.css'
})
export class DialogUserComponent {

  constructor(private guardaVar: GuardarVarsService){}

  private readonly dialogs = inject(TuiDialogService);
 
     public name: string | '' =  '';
    protected items = [10, 50, 100];
 
    public readonly context = injectContext<TuiDialogContext<string, string>>();
 
    protected get hasValue(): boolean {
        return this.name !== '';
    }
 
    protected get data(): string {
        return this.context.data;
    }
 
    protected submit(): void {
        if (this.name !== '') {
            this.context.completeWith(this.name);
        }
        this.guardaVar.setNombre(this.name);;
    }
 
    protected showDialog(content: TemplateRef<TuiDialogContext>): void {
        this.dialogs.open(content, {dismissible: true}).subscribe();
    }

}

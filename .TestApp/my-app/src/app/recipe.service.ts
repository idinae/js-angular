import { EventEmitter } from '@angular/core';
import { Recipe } from './cooks/recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private cooks: Recipe[] = [
    new Recipe(1, 'Основни ястия', 'Кавърма', '700 гр. обезкостена свинска плешка, 5-6 средно големи глави кромид лук или 5-6 стръка праз, две зелени и две червени чушки, (когато е с кромид лук може да се сложат и гъби), два домата, черен пипер – млян и на зърна, една чаена лъжичка червен пипер, сол, олио. Месото се нарязва на хапки и се пържи/задушава в голяма тенджера под капак. Като омекне, се добавят нарязания по на едро лук и нарязаните чушки. След като омекнат, се настъргват вътре доматите без люспите. Докато ври, по някое време се добавят солта, черният пипер – смлян и на зърна, и накрая и червеният пипер. Оставя се малко сос, когато се сгъсти накрая. Когато се прави на фурна в гювеч, всичко се нарязва и се слага едновременно да се пече.', './../../assets/images/img01.jpg', 0, []),
    new Recipe(2, 'Основни ястия', 'Агнешко с патладжани', 'Агнешкото се изпича и се нарязва на ситни парченца. Патладжанът също се изпича и се нарязва на ситно. Смесват се, като се добавя пресован чесън, нарязан на ситно пресен босилек и къри, куркума и розмарин. Може да се добави и от мазнината, в която се е пекло агнешкото, или зехтин. Също и цедено кисело мляко, но то малко убива вкуса на агнешкото и патладжана. Същото може да се приготви и с пържене на месото и патладжана.', './../../assets/images/img02.jpg', 0, []),
    new Recipe(3, 'Основни ястия', 'Чушки с патладжан', '6 малки патладжана, 6 червени чушки, 125 гр. сирене бри, 125 гр. крема сирене, половин кофичка заквасена сметана, чесън, сол, олио. Патладжаните са изпичат на шайби. Нарязват се и се смесват със ситно нарязаното бри, кремата, сметаната и чесъна. С плънката се пълнят чушките и се пекат във фурната.', './../../assets/images/img03.jpg', 0, []),
  ];

  getRecipes() {
    return this.cooks.slice();
  }
}
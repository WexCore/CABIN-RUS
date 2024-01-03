onEvent('rei.hide.items', event => {
  let coinhide = (name) => {
    event.hide('thermal:' + name + '_coin')  
    event.hide('createdeco:' + name + '_coin')  
    event.hide('createdeco:' + name + '_coinstack')  
    }
    coinhide('iron')
    coinhide('copper')
    coinhide('netherite')
    coinhide('tin')
    coinhide('lead')
    coinhide('nickel')
    coinhide('electrum')
    coinhide('invar')
    coinhide('constantan')
    coinhide('signalum')
    coinhide('lumium')
    coinhide('enderium')
    coinhide('brass')
    coinhide('bronze')
    coinhide('cast_iron')
    coinhide('zinc')
})

onEvent('rei.group', event => {

	event.groupItemsByTag('supplementaries:rei_groups/hanging_signs', 'Sign Posts', 'supplementaries:hanging_signs')
	event.groupItemsByTag('supplementaries:rei_groups/sign_posts', 'Sign Posts', 'supplementaries:sign_posts')
	event.groupItemsByTag('tconstruct:rei_groups/modifiable', 'Tinkers Tools', 'tconstruct:modifiable')
	event.groupItemsByTag('tconstruct:rei_groups/parts', 'Tinkers Parts', 'tconstruct:parts')

	const useNbt = ['potion', 'enchanted_book', 'splash_potion', 'tipped_arrow', 'lingering_potion', 'reliquary:potion', 'reliquary:potion_essence', 'reliquary:splash_potion', 'reliquary:lingering_potion', 'reliquary:tipped_arrow', 'tconstruct:potion_bucket', 'tconstruct:crafting_station', 'tconstruct:tinker_station', 'tconstruct:part_builder', 'tconstruct:modifier_worktable', 'tconstruct:tinkers_anvil', 'tconstruct:scorched_anvil', 'tconstruct:repair_kit', 'chiselandbits:block_bit']

	useNbt.forEach(id => {
		const item = Item.of(id)
		const { namespace, path } = Utils.id(item.id)
		event.groupSameItem(`kubejs:rei_groups/${namespace}/${path}`, item.name, item)
	})



	event.groupItems('kubejs:rei_groups/microblocks', 'Microblocks', [
		/microblock/
	])

	event.groupItems('kubejs:rei_groups/fluidbuckets', 'Buckets of Fluids', [
		/bucket/
	])

	event.groupItems('kubejs:rei_groups/spawneggs', 'Spawn Eggs', [
		/spawn_egg/,
		"supplementaries:red_merchant_spawn_egg"
	])

	event.groupItems('kubejs:rei_groups/buddycards_base_set', 'Buddy Cards Base Set', [
		/buddycards:buddycard_base/
	])

	event.groupItems('kubejs:rei_groups/buddycards_nether_set', 'Buddy Cards Nether Set', [
		/buddycards:buddycard_nether/
	])

	event.groupItems('kubejs:rei_groups/buddycards_end_set', 'Buddy Cards End Set', [
		/buddycards:buddycard_end/
	])

	event.groupItems('kubejs:rei_groups/buddycards_holiday', 'Buddy Cards Holiday', [
		"buddycards:buddycard_holiday1",
		"buddycards:buddycard_holiday2",
		"buddycards:buddycard_holiday3",
		"buddycards:buddycard_holiday4",
		"buddycards:buddycard_holiday5",
		"buddycards:buddycard_holiday6"
	])

})

  onEvent('item.tooltip', tooltip => {
    let holds = (id, slots) => tooltip.add("metalbarrels:" + id + "_barrel", [`§7${slots} слотов`])
    let main_assembly = (id, stage) => tooltip.add(id, [`§7Основная сборка: ${stage == "4" ? "§6Финал" : "§6Глава " + stage}`, '§8Подумайте над автоматизацией',  '§8производства этого предмета'])
    let bonus_assembly = (id, stage) => tooltip.add(id, [`§7Бонусная сборка: §6Глава ${stage}`])
    let not_consumed = (id, stage) => tooltip.add(id, [`§7Не тратится в процессе сборки`])

    tooltip.add("minecraft:redstone_ore", [`§7Не генерируется в мире, для получения редстоуна нужно измельчить киноварь.`]);
    tooltip.add("minecraft:deepslate_redstone_ore", [`§7Не генерируется в мире, для получения редстоуна нужно измельчить киноварь.`]);
    tooltip.add('supplementaries:ash', ['Создается путем сжигания деревянных матерьялов в мире'])
	  tooltip.add('storagedrawers:controller', ['Позволяет автоматизировать вставку и извлечение из подключенных ящиков'])
	  tooltip.add('storagedrawers:controller_slave', ['Служит дополнительным средством автоматизации для вставки и извлечения предметов при наличии контроллера ящика.'])

    holds('copper', 5 * 9)
    holds('iron', 6 * 9)
    holds('silver', 8 * 9)
    holds('gold', 9 * 9)
  
    main_assembly('kubejs:kinetic_mechanism', "1")
    bonus_assembly('kubejs:sealed_mechanism', "1A")
    bonus_assembly('kubejs:reinforced_mechanism', "1B")
    main_assembly('create:precision_mechanism', "2")
    bonus_assembly('kubejs:infernal_mechanism', "2A")
    main_assembly('kubejs:inductive_mechanism', "3")
    bonus_assembly('kubejs:abstruse_mechanism', "3A")
    main_assembly('kubejs:calculation_mechanism', "4")
  
    not_consumed('cb_microblock:stone_saw')
    not_consumed('cb_microblock:iron_saw')
    not_consumed('cb_microblock:diamond_saw')
    not_consumed('projectred-core:screwdriver')
    // not_consumed('create:super_glue')
    not_consumed('kubejs:chromatic_resonator')
    not_consumed('kubejs:flash_drive')
    // not_consumed('xreliquary:mercy_cross')
    // not_consumed('xreliquary:ender_staff')
  
    global.substrates[0].forEach(e => tooltip.add(e.id, [`§8Категория: §7Магматические`]));
    global.substrates[1].forEach(e => tooltip.add(e.id, [`§8Категория: §7Травяные`]));
    global.substrates[2].forEach(e => tooltip.add(e.id, [`§8Категория: §7Нестабильные`]));
    global.substrates[3].forEach(e => tooltip.add(e.id, [`§8Категория: §7Кристалические`]));
    global.substrates[4].forEach(e => tooltip.add(e.id, [`§8Категория: §7Металлургические`]));
    global.substrates[5].forEach(e => tooltip.add(e.id, [`§8Категория: §7Самоцветные`]));
    global.substrates[6].forEach(e => tooltip.add(e.id, [`§8Категория: §7Катализаторы`]));
  
    tooltip.add("structurescompass:structures_compass", [`§7ПКМ для активации`]);
    tooltip.add("reliquary:alkahestry_tome", [`§6Невозможно использовать в механическом крафте`]);
  
    tooltip.add("kubejs:accellerator_redstone", ["§7При использовании в алхимическом исследовании:", "  §6Один из §eправильных §6реагентов",
		"  §6в §eнеправильном §6слоте не будет потрачен"]);
	tooltip.add("kubejs:accellerator_glowstone", ["§7При использовании в алхимическом исследовании:", "  §6Один из §eправильных §6реагентов",
		"  §6в §eправильном §6слоте не будет потрачен"]);
  
    for (let i = 0; i < 15; i++) {
      tooltip.add(`kubejs:failed_alchemy_${i}`, [
        `§7Поместите в центробежный разделитель для анализа.`,
        "",
        "§6Даёт:",
        "- Пепел §7за каждый неправильный ингридиент",
        "- Редстоун §7за каждый правильный ингридиент",
        "   §7в неправильном слоте",
        "- Глоустоун §7за каждый правильный ингридиент",
        "   §7в правильном слоте"
      ])
    }
const pureore = ['minecraft:raw_iron', 'minecraft:raw_copper', 'minecraft:raw_gold', 'thermal:raw_lead', 'thermal:raw_nickel', 'create:raw_zinc']
    pureore.forEach(pureore => {
    tooltip.add(pureore, [`§7Более чистый сорт руды`,`§7Может быть найден только путем исследования`])
    })
  })

  onEvent('rei.remove.categories', event => {
  const category = ['beyond_earth:rocket_t2', 'beyond_earth:rocket_t3', 'beyond_earth:rocket_t4', 'beyond_earth:rover', 'beyond_earth:space_station']
  category.forEach(id => {
    event.yeet(id)
  })
  })

  